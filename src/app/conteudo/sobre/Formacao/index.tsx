"use cliente"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Qualificacao from "./Qualificacao";
import Trabalhos from "./Trabalhos";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Formacao() {
  const [mostrarComponente1, setMostrarComponente1] = useState(true);

  const handleBotao1Click = () => {
    setMostrarComponente1(true);
  };

  const handleBotao2Click = () => {
    setMostrarComponente1(false);
  };
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center  md:justify-start md:flex-row md:items-end gap-2 mt-10">
        <h2 className="text-azul text-2xl">Qualificação</h2>
        <p className="text-prata md:pl-5">minha jornada pessoal</p>
      </div>
      <div className="flex text-prata px-5 md:px-0 gap-24 md:gap-44 my-3 border-b border-prata">
        <div className="flex gap-2 items-center justify-center m-2">
          <button className="border border-azul p-2 rounded-xl hover:bg-azul transition-all duration-300" onClick={handleBotao1Click}>
            <FontAwesomeIcon icon={faGraduationCap} className="h-6 pr-2" />
            Educação
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center m-2">
          <button className="border border-azul p-2 rounded-xl hover:bg-azul transition-all duration-300" onClick={handleBotao2Click}>
            <FontAwesomeIcon icon={faBriefcase} className="h-6 pr-2" />
            Trabalho
          </button>
        </div>
      </div>
      {mostrarComponente1 ? <Qualificacao /> : <Trabalhos />}
    </div>
  )
}