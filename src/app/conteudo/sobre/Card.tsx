interface Conteudo {
  icon:string;
  number: number;
  text: string;
 
}
export default function Card(ConteudoOBJ: Conteudo) {
  return (
    <div className="group w-32 md:w-40 md:h-28 bg-white bg-opacity-5 hover:bg-opacity-20 transition ease-in-out duration-1000 text-prata rounded-2xl flex flex-col ">
      <div className="px-3 pt-3 ">
       {ConteudoOBJ.icon}
      </div>
      <div className="px-3 py-3 flex flex-col text-sm relative items-end h-full overflow-hidden justify-between">
        {ConteudoOBJ.text}
        <div className="md:absolute right-2 pl-2 text-xl md:text-4xl group-hover:scale-200  group-transition ease-in duration-500 group-hover:-rotate-45 z-10">
        {ConteudoOBJ.number}
        </div>
      </div>
    </div>
  )
}