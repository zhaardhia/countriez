import { FC, useEffect, useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from '../services/queries'
import { useSearchParams } from "react-router-dom";
import useStore from '../stores/selectedCountryStore';

interface ModalType {
  modalActive: boolean;
  setModalActive: (modalActive: boolean) => void;
}

const ModalCountry: FC<ModalType> = ({ setModalActive }) => {
  const [searchParams] = useSearchParams();
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
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto w-fit">
          <div className="border-0 rounded-lg shadow-lg relative bg-white flex flex-col w-[30rem] outline-none focus:outline-none h-fit p-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-8xl font-bold">
                {data?.country?.emoji}
              </h1>
              <div className="flex justify-center gap-2">
                <p className="text-center text-2xl font-extralight">
                  {data?.country?.name}
                </p>
                <p className="font-semibold text-2xl">({data?.country?.code})</p>
              </div>

              <div className="grid grid-cols-3 gap-2 gap-y-5 my-5">
                <div className="border-r-[0.2rem] flex flex-col text-center">
                  <p className="text-slate-300">Capital</p>
                  <p>{data?.country?.capital}</p>
                </div>
                <div className="border-r-[0.2rem] flex flex-col text-center">
                  <p className="text-slate-300">Currency💰</p>
                  <p>{data?.country?.currency}</p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-slate-300">Phone☎️</p>
                  <p>+{data?.country?.phone}</p>
                </div>
                <div className="border-r-[0.2rem] flex flex-col text-center">
                  <p className="text-slate-300">Capital</p>
                  <p>{data?.country?.capital}</p>
                </div>
                <div className="border-r-[0.2rem] flex flex-col text-center">
                  <p className="text-slate-300">Capital</p>
                  <p>{data?.country?.capital}</p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-slate-300">Capital</p>
                  <p>{data?.country?.capital}</p>
                </div>
              </div>
              <div className="flex justify-center ">
                <button
                  className="p-3 bg-red-500 hover:bg-red-300 rounded-lg text-white"
                  onClick={() => setModalActive(false)}
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalCountry;