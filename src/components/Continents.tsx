import { FC } from 'react'
import { useQuery, useLazyQuery } from "@apollo/client";
import { ALL_CONTINENTS } from '../services/queries'
import useStore from '../stores/selectedCountryStore';

interface Continent {
  code: string,
  name: string,
  __typename: string,
  countries: []
}

const Continents: FC = () => {
  const { data: continents, loading, error } = useQuery(ALL_CONTINENTS)
  const { setContinentCode, setContinentName, setCountries, continentName } = useStore();

  console.log(continents?.continents)

  const handleOnclick = (e: Continent) => {
    console.log(e)
    setContinentCode(e.code);
    setContinentName(e.name);
    setCountries(e.countries);
  };

  return (
    <div className="w-[80%] bg-[#B7C4CF] mx-auto rounded-lg my-10 text-[#967E76]">
      <div className="flex w-[80%] mx-auto pt-10">
        <p className="text-3xl font-light">Choose Continents: {continentName}</p> 
      </div>
      <div className="grid grid-cols-3 w-[80%] mx-auto gap-5 py-10">
        {continents?.continents?.map((continent: Continent) => {
          return (
            <button 
              className="px-5 py-4 bg-[#EEE3CB] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md"
              onClick={() => handleOnclick(continent)}
            >
              {continent.name}
            </button>
          )
        })}
        {/* <button className="px-5 py-4 bg-[#EEE3CB] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md">Asia</button>
        <button className="px-5 py-4 bg-[#EEE3CB] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md">Oceania</button>
        <button className="px-5 py-4 bg-[#EEE3CB] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md">America</button>
        <button className="px-5 py-4 bg-[#EEE3CB] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md">Africa</button>
        <button className="px-5 py-4 bg-[#EEE3CB] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md">Europe</button>
        <button className="px-5 py-4 bg-[#EEE3CB] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md">Antartica</button> */}
      </div>
    </div>
  )
}

export default Continents