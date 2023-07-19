import Card from "./Card";
import { faBuilding, faFireFlameCurved, faGraduationCap, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Formacao from "./Formacao";


export default function Sobre() {
  return (
    <div className=" w-screen md:h-full md:pl-96 pt-10 md:pt-20 bg-gray-950">
      <h2 className="text-azul text-2xl py-2 text-center md:text-start">Sobre</h2>
      <div className="flex flex-wrap md:flex-row justify-center md:justify-start items-center gap-1 md:gap-5 mt-6">
        <Card
          icon={faFireFlameCurved}
          iconColor="prata"
          text="Anos de experiência"
          number={2}
        />
        <Card
          icon={faListCheck}
          iconColor="azul"
          text="Projetos desenvolvidos"
          number={2}
        />
        <Card
          icon={faBuilding}
          iconColor="prata"
          text="Empresas trabalhadas"
          number={2}
        />
      </div>
      <Formacao />
    </div>
  )
}