import Carrossel from "./Carrossel"

export default function Portifolio() {

  return (
    <div id='portifolio' className=" w-screen h-screen md:pl-80 pt-10 md:pt-20 bg-gray-950 flex flex-col items-center">
      <div className="gap-5 flex flex-col justify-center items-center">
        <h2 className="text-azul text-2xl pb-5">Portifólio</h2>
      </div>
      <div className="pb-5">
        <Carrossel/>
      </div>
      <div className="bg-gray-950 h-full">
        <div className="bg-white  bg-opacity-20 pl-5 md:pl-44 h-full pt-5 space-y-5 text-white w-screen border-t border-prata">
          <h2 className="text-2xl">Você tem um novo projeto?</h2>
          <p>Contacte-me agora e obtenha um preço especial para o seu projeto</p>
        </div>
      </div>
    </div>
  )
}