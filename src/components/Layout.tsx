import { FC, ReactNode } from 'react'
import Footer from './Footer'

interface Child {
  children: ReactNode | null
}

const Layout: FC<Child> = ({ children }) => {
  return (
    <>
      <h1 className="text-center pt-20 pb-5 text-4xl text-[#967E76]">Countriez🇮🇩</h1>
      {children}
      <Footer />
    </>
  )
}

export default Layout