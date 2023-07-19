import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import Cardqualifica from "./Cardqualifica";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
  return (
    <div className=" w-screen md:h-full md:pl-96 pt-10 md:pt-20 bg-gray-950">
      <h2 className="text-azul text-2xl py-2 text-center md:text-start">Sobre</h2>
      <div className="flex flex-wrap md:flex-row justify-center md:justify-start items-center gap-1 md:gap-5 mt-6">
        <Card
          text="Anos de experiência"
          number={2}
        />
        <Card
          text="Projetos desenvolvidos"
          number={2}
        />
        <Card
          text="empresas trabalhadas"
          number={2}
        />
      </div>
      <div className="flex flex-col justify-center items-center  md:justify-start md:flex-row md:items-end gap-2 mt-10">
        <h2 className="text-azul text-2xl">Qualificação</h2>
        <p className="text-prata md:pl-5">minha jornada pessoal</p>
      </div>
      <div className="flex text-prata px-5 md:px-0 gap-24 md:gap-44 my-3 border-b border-prata">
        <div className="flex gap-2 items-center justify-center m-2">
          <button className="border border-azul p-2 rounded-xl hover:bg-azul transition-all duration-300">
            <FontAwesomeIcon icon={faGraduationCap} className="h-6 pr-2" />
            Educação
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center m-2">
          <button className="border border-azul p-2 rounded-xl hover:bg-azul transition-all duration-300">
            <FontAwesomeIcon icon={faBriefcase} className="h-6 pr-2" />
            Trabalho
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-start flex-wrap gap-1 mt-6">
        <Cardqualifica
          text1="Baxarelado em Sistemas de Informação"
          text="Faculdade São Lourenço"
          data="02/02/2014"
        />
        <Cardqualifica
          text1="eu"
          text="eutbm"
          data="02/02/2014"
        />
        <Cardqualifica
          text1="eu"
          text="eutbm"
          data="02/02/2014"
        />
      </div>
    </div>
  )
}