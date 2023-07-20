import Card from "./Card";
import { faBuilding, faFireFlameCurved, faGraduationCap, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Formacao from "./Formacao";


export default function Sobre() {
  return (
    <div className=" w-screen md:h-screen md:pl-96 pt-10 md:pt-28 bg-gray-950">
      <h2 className="text-azul text-2xl py-2 text-center md:text-start">Sobre</h2>
      <p className="text-white  py-10 text-center md:text-left px-10 md:px-0 md:pr-10 flex justify-center items-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nostrum voluptates nobis voluptatibus quo corrupti voluptate cum maxime inventore a? Recusandae dolorum totam omnis ipsam enim in veritatis nam. Facilis!
        </p>
      <div className="flex flex-wrap md:flex-row justify-center md:justify-start items-center gap-1 md:gap-5 mt-6">
        <Card
          icon={faFireFlameCurved}
          iconColor="vermelho"
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
          iconColor="minhacor"
          text="Empresas trabalhadas"
          number={2}
        />
      </div>
      <Formacao />
    </div>
  )
}