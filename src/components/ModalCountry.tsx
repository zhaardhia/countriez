import { FC, useEffect, useCallback, CSSProperties } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from '../services/queries'
import { useSearchParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { motion, useAnimation, Variants } from 'framer-motion'
import { animateFromLeft, animateFromRight, animateFromAboveSlower, animateOpacity } from '../animations/animationFade'

interface ModalType {
  modalActive: boolean;
  setModalActive: (modalActive: boolean) => void;
}

type LanguageObj = {
  code: string,
  name: string,
  native: string
}

type StateObj = {
  code: string,
  name: string,
}

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const ModalCountry: FC<ModalType> = ({ setModalActive }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countryQuery = searchParams.get("country")
  console.log(countryQuery)

  const [getCountry, { data, loading, error }] = useLazyQuery(GET_COUNTRY_BY_CODE);

  const showCountry = useCallback(
    (code: string) => {
      getCountry({ variables: { code: code } });
    },
    [getCountry]
  );

  useEffect(() => {
    showCountry(countryQuery!);
  }, [countryQuery, data, showCountry]);

  // useEffect(() => {
  //   fetchCountry({
  //     variables: {
  //       countryCode: countryQuery
  //     },
  //   })
  // }, [countryQuery])

  // const [
  //   fetchCountry,
  //   {data: countryData, loading: countryLoading}
  // ] = useLazyQuery(GET_COUNTRY_BY_CODE);
  console.log(data)
  // if (countryData) console.log(countryData)
  const removeQueryParams = () => {
    const param = searchParams.get('country');

    if (param) {
      // 👇️ delete each query param
      searchParams.delete('country');

      // 👇️ update state after
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto w-fit">
          <motion.div 
            className="border-0 rounded-lg shadow-lg relative bg-white flex flex-col w-[30rem] outline-none focus:outline-none h-fit p-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false}}
            transition={{staggerChildren:0.5}}
            variants={animateFromRight}
          >
            {
              loading && (
                <div className="flex justify-center">
                  <ClimbingBoxLoader
                    color="#D7C0AE"
                    loading={loading}
                    // cssOverride={override}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
                
              )
            }
            {
              !loading && (
                <div className="flex flex-col gap-2">
                  <h1 className="text-center text-8xl font-bold">
                    {data?.country?.emoji}
                  </h1>
                  <div className="flex justify-center gap-2">
                    <p className="text-center text-2xl font-extralight">
                      {data?.country?.name}
                    </p>
                    <p className="font-semibold text-xl">({data?.country?.code})</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 gap-y-5 my-5">
                    <div className="border-r-[0.2rem] flex flex-col text-center">
                      <p className="text-slate-500">Capital</p>
                      <p>{data?.country?.capital}</p>
                    </div>
                    <div className="border-r-[0.2rem] flex flex-col text-center">
                      <p className="text-slate-500">Currency💰</p>
                      <p>{data?.country?.currency}</p>
                    </div>
                    <div className="flex flex-col text-center">
                      <p className="text-slate-500">Phone☎️</p>
                      <p>+{data?.country?.phone}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-slate-500">Languages: </p>
                    <div className="my-2 flex gap-1 flex-col">
                      {data?.country?.languages.map((language: LanguageObj) => {
                        return (
                          <p>- {language.name} / {language.native} (<strong>{language.code}</strong>)</p>
                        )
                      })}
                    </div>
                    
                  </div>
                  {data?.country?.states.length > 0 && (
                    <div className="h-[10rem] overflow-y-auto">
                      <p className="text-xl text-slate-500">States: </p>
                      <div className="my-2 flex gap-1 flex-col">
                        {data?.country?.states.map((state: StateObj) => {
                          return (
                            <p>- {state.name} (<strong>{state.code}</strong>)</p>
                          )
                        })}
                      </div>
                      
                    </div>
                  )}
                  
                  <div className="flex justify-center mt-5">
                    <button
                      className="p-3 bg-red-500 hover:bg-red-300 rounded-lg text-white"
                      onClick={() => {
                        setModalActive(false)
                        removeQueryParams()
                      }} 
                    >Close</button>
                  </div>
                </div>
              )
            }
            
          </motion.div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalCountry;