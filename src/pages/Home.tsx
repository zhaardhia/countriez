import { useState, FC } from 'react'
import Layout from '../components/Layout'
import { useQuery, useLazyQuery } from "@apollo/client";
import { ALL_CONTINENTS } from '../services/queries'
import Continents from '../components/Continents';
import Countries from '../components/Countries';
import ModalCountry from '../components/ModalCountry';
import { Link } from 'react-router-dom'

const Home: FC = () => {
  const { data, loading, error } = useQuery(ALL_CONTINENTS)
  const [modalActive, setModalActive] = useState<boolean>(false);

  console.log(data);
  return (
    <Layout>
      <div className="mt-10 flex flex-col gap-10 text-center text-2xl font-light text-[#967E76]">
        <p className="">Don’t know what currency in your own country?<br />Or even you don’t know what your own language in your country?</p>
        <p className="">We got your back</p>
      </div>

      <div className="w-[80%] mx-auto flex justify-end">
        <div className="flex items-center gap-2 text-[#967E76]">
          <p className="text-xl">Bored? Let's</p>
          <Link to="/quiz" className="text-xl px-3 py-2 bg-[#B7C4CF] hover:bg-[#a3bacc] shadow-lg rounded-lg">Take a Quiz</Link>
        </div>
      </div>
      <Continents />
      <Countries setModalActive={setModalActive} modalActive={modalActive} />
      {modalActive && (<ModalCountry setModalActive={setModalActive} modalActive={modalActive} />)}
    </Layout>
  )
}

export default Home