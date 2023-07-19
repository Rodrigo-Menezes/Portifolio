'use client'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react'

export default function SideBarM() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='fixed z-50 flex justify-end  md:hidden right-4'>
      <svg
        onClick={() => setShowSidebar(!showSidebar)}
        className="right-10 top-6 z-30 flex cursor-pointer items-center"
        fill="#ffffff"
        viewBox="0 0 100 80"
        width="30"
        height="30"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="70" height="10" fill='#006CB9'></rect>
        <rect y="60" width="40" height="10"></rect>
      </svg>
      <div
        className={`text-white  fixed right-0 top-0 z-40 flex h-full w-[70vw]  flex-col bg-slate-900 transition-all duration-1000 ease-in-out ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}
      >
        <button
          className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-2xl"
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
          href="#skills"
          className="mt-5 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Skills</p>
        </a>
        <a
          href="#servicos"
          className="mt-5 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Serviços</p>
        </a>
        <a
          href="#portifolio"
          className="mt-5 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Portifólio</p>
        </a>
        <div className='flex items-center justify-center gap-5 mt-8 mb-8'>
          <Link href='https://instagram.com/rodrigo_menezes91?igshid=MzNlNGNkZWQ4Mg==' target="blank" onClick={() => setShowSidebar(!showSidebar)} ><FontAwesomeIcon icon={faInstagram} className="h-7 hover:text-amarelo transition-all duration-300" /></Link>
          <Link href='' target="blank" onClick={() => setShowSidebar(!showSidebar)} ><FontAwesomeIcon icon={faGithub} className="h-7 hover:text-amarelo transition-all duration-300" /></Link>
        </div>
        <a href='https://wa.me/5535988253492' target='_blank' className="relative group flex justify-center items-center">
          <button className='rounded-3xl text-white py-3 px-5 bg-azul hover:bg-gradient-to-r from-azul to-prata hover:px-12 clip  transition-all duration-500 hover:text-sky-950'>
            Entre em contato
          </button>
        </a>
      </div>
    </div>
  )
}