"use client";
import rodrigo from '../../../public/rodrigo.png';
import Image from 'next/image';

export default function Nav() {

  return (
    <div className="bg-slate-900 z-20 fixed w-screen hidden md:flex justify-between items-center border-b border-prata h-20">
      <div className='flex items-center pl-10 drop-shadow-dark3'>
        <Image src={rodrigo} alt='logo rodrigo menezes 'width={85} />
      </div>
      <div className="flex justify-center items-center gap-12 text-prata">
        <p className="relative group mx-5">
          <a href='#sobre' className="flex justify-center items-center uppercase">Sobre</a>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500"></span>
        </p>
        <p className="relative group mx-5">
          <a href='#skills' className="flex justify-center items-center uppercase">Skills</a>
          <span className='absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500'></span>
        </p>
        <p className="relative group mx-5">
          <a href='#servicos' className="flex justify-center items-center uppercase">Serviços</a>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500"></span>
        </p>
        <p className="relative group mx-5">
          <a href='#portifolio' className="flex justify-center items-center uppercase">Portifólio</a>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500"></span>
        </p>
        <div className="pr-5">
          <svg width="54" height="30" viewBox="0 0 54 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="52" height="28" rx="14" stroke="#B2CAD8" stroke-width="2" />
            <rect x="5" y="6" width="18" height="18" rx="9" fill="#B2CAD8" />
          </svg>
        </div>
      </div>
    </div>
  )
}