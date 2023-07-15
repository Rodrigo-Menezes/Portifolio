import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import foto from '../../../public/foto.png'

export default function SideBar() {
  return (
    <div className="top-10 fixed h-screen bg-slate-900 w-80 border-r border-prata pb-10">
      <div className="flex h-full flex-col justify-center items-center text-center">
        <Image src={foto} alt='foto de perfil' width={100} />
        <h1 className="text-2xl font-bold mt-10 bg-gradient-to-r text-transparent from-azul to-prata bg-clip-text">Rodrigo Menezes</h1>
        <h2 className="text-azul font-bold mb-10 ">Desenvolvedor front-end</h2>
        <p className="text-base text-prata/75 px-5 text-center ">
          "Desenvolva a web do futuro com Next.js - Front-end mais rápido, poderoso e escalável!"
        </p>
        <div className='flex gap-5 my-10'>
          <Link href="">
            <FontAwesomeIcon icon={faInstagram} className="h-7 text-azul hover:text-prata transition-all duration-300" />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faGithub} className="h-7 text-azul hover:text-prata transition-all duration-300" />
          </Link>
        </div>

        <a href='' className="relative group">
          <button className='rounded-3xl text-white py-3 px-5 bg-azul hover:bg-gradient-to-r from-azul to-prata hover:px-12 clip  transition-all duration-500 hover:text-sky-950'>
              <FontAwesomeIcon icon={faWhatsapp} className="absolute right-2 top-1 h-0 group-hover:h-[80%] clip  transition-all duration-1000 ease-in-out"/>
            Entre em contato
          </button>
        </a>
      </div>
    </div>
  )
}