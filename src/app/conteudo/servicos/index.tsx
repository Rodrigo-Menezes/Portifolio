
export default function Servicos() {

  return (
    <div className=" w-screen h-screen  md:pl-80  md:pt-20 bg-gray-950 flex flex-col items-center">
      <div className="gap-5 flex flex-col justify-center items-center">
        <h2 className="text-azul text-2xl pt-5">Serviços</h2>
        <p className="text-zinc-400">O que eu ofereço</p>
        <p className="text-zinc-400 px-10 text-center">Eu vou levar sua experiência para o próximo nível! Desenvolva projetos incríveis de UX/UI e Frontend comigo e surpreenda seus usuários com design de ponta.</p>
      </div>
      <div className="flex flex-wrap gap-5 pt-5 pb-5">
        <div className="overflow-hidden bg-bgux bg-cover w-40 h-36 md:w-80 md:h-56 rounded-xl hover:scale-110 transition ease-in duration-300 drop-shadow-dark1">
          <h2 className="text-white flex justify-center text-xl h-36 md:h-56 items-end bg-black bg-opacity-50 hover:bg-opacity-0 transition ease-in duration-300 drop-shadow-dark1">UI/UX Designer</h2>
        </div>
        <div className="overflow-hidden bg-bgfront bg-cover w-40 md:w-80 md:h-56 rounded-xl drop-shadow hover:scale-110 transition ease-in duration-300">
          <h2 className="text-white flex justify-center text-xl h-36 md:h-56 items-end bg-black bg-opacity-50 hover:bg-opacity-0 transition ease-in duration-300 drop-shadow-dark1">Frontend</h2>
        </div>
      </div>
      <div className="bg-gray-950 h-full">
        <div className="bg-white bg-opacity-5 pl-5 md:pl-44 h-full pt-5 space-y-5 text-white w-screen border-t border-prata px-5">
          <h2 className="text-lg md:text-2xl">Você tem um novo projeto?</h2>
          <p>Contacte-me agora e obtenha um preço especial para o seu projeto</p>
        </div>
      </div>
    </div>
  )
}