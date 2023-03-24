import { FC, useEffect } from "react";
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
  useEffect(() => {
    fetchCountry({
      variables: {
        countryCode: countryQuery
      },
    })
  }, [countryQuery])

  const [
    fetchCountry,
    {data: countryData, loading: countryLoading}
  ] = useLazyQuery(GET_COUNTRY_BY_CODE);

  if (countryData) console.log(countryData)
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto w-fit">
          <div className="border-0 rounded-lg shadow-lg relative bg-white flex flex-col w-[30rem] outline-none focus:outline-none h-fit p-10">
            <div className="flex flex-col gap-8">
              <img
                src="https://storage.googleapis.com/campaign-backend-development-bucket/campaign/1656041968694_ChampIlustrator.png"
                alt="Champ Here!"
                className="w-[8rem] mx-auto"
              />

              <h1 className="text-center text-2xl font-bold">
                Approve?
              </h1>
              <p className="text-center">
                that have been approved can be published by the Organizer
                and decisions can’t be undone
              </p>
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