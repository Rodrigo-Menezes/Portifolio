'use client'
import { useEffect, useState } from 'react'

export default function SideBarM() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='flex justify-end  md:hidden absolute right-4'>
      <svg
        onClick={() => setShowSidebar(!showSidebar)}
        className="right-10 top-6 z-30 flex cursor-pointer items-center"
        fill="#B2CAD8"
        viewBox="0 0 100 80"
        width="30"
        height="30"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="70" height="10" fill='#5671A6'></rect>
        <rect y="60" width="40" height="10"></rect>
      </svg>
      <div
        className={`text-white  fixed right-0 top-0 z-40 flex h-full w-[70vw]  flex-col bg-slate-900 transition-all duration-1000 ease-in-out ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}
      >
        <button
          className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-2xl text-vermelho"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <a
          href="#sobre"
          className="mt-20 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Sobre</p>
        </a>
        <a
          href="#sobre"
          className="mt-5 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Skills</p>
        </a>
        <a
          href="#sobre"
          className="mt-5 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Serviços</p>
        </a>
        <a
          href="#sobre"
          className="mt-5 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Portifólio</p>
        </a>
        {/* <div className='flex items-center justify-center gap-5 mt-16'>
          <Link href='https://instagram.com/negociosdeesporte' target="blank" onClick={() => setShowSidebar(!showSidebar)} ><FontAwesomeIcon icon={faInstagram} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href='https://www.facebook.com/negociosdeesporte?mibextid=ZbWKwL' target="blank"onClick={() => setShowSidebar(!showSidebar)} > <FontAwesomeIcon icon={faFacebook} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href='https://twitter.com/NegocioEsportes' target="blank" onClick={() => setShowSidebar(!showSidebar)}> <FontAwesomeIcon icon={faTwitter} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href="https://wa.me/553599689766" target="blank" onClick={() => setShowSidebar(!showSidebar)}> <FontAwesomeIcon icon={faWhatsapp} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
        </div>*/}
      </div>
    </div>
  )
}