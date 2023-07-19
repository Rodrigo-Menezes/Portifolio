import { faCss3, faFigma, faGithub, faHtml5, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sobre() {

  return (
    <div className=" w-screen md:h-screen md:pl-80 pt-10 md:pt-20 pb-20 bg-slate-900 flex flex-col items-center">
      <div className="flex items-center flex-col text-zinc-400">
      
        <h2 className="text-azul text-2xl pt-5">Skills</h2>
        <h2 className=''>Tecnologias que utilizo</h2>
        <p className="pt-16">Desenvolvedor Frontend</p>
        <p className='text-sm'>Mais de 2 anos</p>
      </div>
      <div className='py-5 flex flex-col justify-center items-center'>
        <FontAwesomeIcon icon={faReact} className="h-20 text-blue-500 transition-all duration-300 animate-spin-slow" />
        <h2 className='text-white'>React.js</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-2 md:gap-5 px-3'>
        <div className='pt-2 flex flex-col items-center'>
          <FontAwesomeIcon icon={faHtml5} className="h-10 text-orange-500" />
          <h2 className='text-white'>HTML</h2>
        </div>
        <div className='pt-2 flex flex-col items-center'>
          <FontAwesomeIcon icon={faCss3} className="h-10 text-blue-500" />
          <h2 className='text-white'>Css 3</h2>
        </div>
        <div className='pt-2 flex flex-col items-center'>
          <FontAwesomeIcon icon={faJsSquare} className="h-10 text-yellow-500" />
          <h2 className='text-white'>Javascript</h2>
        </div>
        <div className='pt-2 flex flex-col items-center'>
          <div className='bg-blue-500 text-slate-900 font-bold text-xl flex items-end justify-end px-1 h-10 w-10 rounded-lg'>Ts</div>
          <h2 className='text-white'>Typescript</h2>
        </div>
        <div className='pt-2 flex flex-col items-center'>
          <svg viewBox="-10 0 70 31" className="text-slate-900 dark:text-white w-auto h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path></svg>
          <h2 className='text-white'>TailwindCSS</h2>
        </div>
        <div className='pt-2 flex flex-col items-center'>
          <FontAwesomeIcon icon={faGithub} className="h-10 text-white" />
          <h2 className='text-white'>Github</h2>
        </div>
        <div className='pt-2 flex flex-col items-center'>
          <FontAwesomeIcon icon={faFigma} className="h-10 text-white" />
          <h2 className='text-white'>Figma</h2>
        </div>
      </div>
    </div>
  )
}