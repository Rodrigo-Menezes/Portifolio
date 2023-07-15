interface Conteudo {
  number: number;
  text: string;
  icone: string;
}
export default function Card(ConteudoOBJ: Conteudo) {
  return (
    <div className="group w-40 h-28  bg-white bg-opacity-5 hover:bg-opacity-20 transition ease-in-out duration-1000 text-prata  rounded-2xl flex flex-col py-3 px-3">
      <div>
        {ConteudoOBJ.icone}
      </div>
      <div className="flex text-sm relative items-end h-full">
        {ConteudoOBJ.text}
        <div className="cover absolute right-1 pl-2 text-4xl group-hover:text-7xl  group-transition ease-in duration-500 group-hover:-rotate-45 ">
        {ConteudoOBJ.number}
        </div>
      </div>
    </div>
  )
}