import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import foto from '../../../public/foto.png'
import RodrigoLogo from '../nome/RodrigoLogo'

export default function SideBar() {
  return (
    <div className="md:top-20 md:fixed md:h-screen bg-gray-950 pt-16 md:pt-0 md:w-80 md:border-r border-prata pb-10">
      <div className="flex h-full flex-col justify-center items-center text-center">
        <Image src={foto} alt='foto de perfil' width={100} />
        <RodrigoLogo/>
        <h2 className="text-azul font-bold mb-10 ">Desenvolvedor front-end</h2>
        <p className="text-base text-zinc-400 px-5 text-center ">
          Desenvolva a web do futuro com Next.js - Front-end mais rápido, poderoso e escalável!
        </p>
        <div className='flex gap-5 my-5'>
          <Link href="">
            <FontAwesomeIcon icon={faInstagram} className="h-7 text-azul hover:text-prata hover:scale-125 transition-all duration-300" />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faGithub} className="h-7 text-azul hover:text-prata hover:scale-125 transition-all duration-300" />
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