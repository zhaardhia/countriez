import { useEffect, FC } from 'react'
import Layout from '../components/Layout'

const Home: FC = () => {
  return (
    <Layout>
      <div className="mt-10 flex flex-col gap-10 text-center text-2xl font-light text-[#967E76]">
        <p className="">Don’t know what currency in your own country?<br />Or even you don’t know what your own language in your country?</p>
        <p className="">We got your back</p>
      </div>
    </Layout>
  )
}

export default Home