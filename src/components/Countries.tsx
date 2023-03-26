import { FC } from 'react'
import useStore from '../stores/selectedCountryStore';
import { useSearchParams } from "react-router-dom";
import { motion, useAnimation, Variants } from 'framer-motion'
import { animateFromLeft, animateFromRight, animateFromAboveSlower, animateOpacity } from '../animations/animationFade'
interface Country {
  code: string;
  emoji: string;
  name: string;
  __typename: string;
}
interface ModalType {
  modalActive: boolean;
  setModalActive: (modalActive: boolean) => void;
}

const Countries: FC<ModalType> = ({ setModalActive, modalActive }) => {
  const { continentName, countries } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <motion.div 
      className="w-[80%] mx-auto rounded-lg my-20 text-[#967E76]"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:false}}
      transition={{staggerChildren:0.5}}
      variants={animateFromLeft}
    >
      <p className="text-3xl font-light text-center">{continentName}</p>
      <div className="flex w-[80%] mx-auto">
        {/* <p className="text-3xl font-light">Choose Continents: ASIA</p>  */}
      </div>
      <div className="grid grid-cols-4 w-[80%] mx-auto gap-5 py-10">
        {countries.map((country: Country) => {
          return (
            <button 
              className="px-5 py-4 bg-[#D7C0AE] hover:bg-[#e8e2d4] rounded-lg text-xl shadow-md"
              onClick={() => {
                setSearchParams({"country": country.code})
                setModalActive(true)
              }}
            >
              {`${country.emoji} ${country.name}`}
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Countries