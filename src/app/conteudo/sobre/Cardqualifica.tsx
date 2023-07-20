interface Conteudo {
  text1: string;
  text: string;
  data: string;
}
export default function Cardqualifica(ConteudoOBJ: Conteudo) {
  return (
    <div className="group w-44 gap-2 bg-slate-700 bg-opacity-5 border border-azul hover:bg-opacity-20 transition ease-in-out duration-1000 text-prata rounded-2xl flex flex-col py-3 px-3">
      <div className="group-hover:text-xl group-transition ease-in-out duration-1000 bg-gradient-to-r text-transparent from-azul to-prata bg-clip-text">
        {ConteudoOBJ.text1}
      </div>
      <div className="flex flex-col text-sm relative justify-end h-full">
        <div>
          {ConteudoOBJ.text}
        </div>
        <div className="flex gap-2 mt-1">
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 2H11.25V1.25C11.25 1.05109 11.171 0.860322 11.0303 0.71967C10.8897 0.579018 10.6989 0.5 10.5 0.5C10.3011 0.5 10.1103 0.579018 9.96967 0.71967C9.82902 0.860322 9.75 1.05109 9.75 1.25V2H5.25V1.25C5.25 1.05109 5.17098 0.860322 5.03033 0.71967C4.88968 0.579018 4.69891 0.5 4.5 0.5C4.30109 0.5 4.11032 0.579018 3.96967 0.71967C3.82902 0.860322 3.75 1.05109 3.75 1.25V2H2.25C1.65326 2 1.08097 2.23705 0.65901 2.65901C0.237053 3.08097 0 3.65326 0 4.25V13.25C0 13.8467 0.237053 14.419 0.65901 14.841C1.08097 15.2629 1.65326 15.5 2.25 15.5H12.75C13.3467 15.5 13.919 15.2629 14.341 14.841C14.7629 14.419 15 13.8467 15 13.25V4.25C15 3.65326 14.7629 3.08097 14.341 2.65901C13.919 2.23705 13.3467 2 12.75 2ZM13.5 13.25C13.5 13.4489 13.421 13.6397 13.2803 13.7803C13.1397 13.921 12.9489 14 12.75 14H2.25C2.05109 14 1.86032 13.921 1.71967 13.7803C1.57902 13.6397 1.5 13.4489 1.5 13.25V8H13.5V13.25ZM13.5 6.5H1.5V4.25C1.5 4.05109 1.57902 3.86032 1.71967 3.71967C1.86032 3.57902 2.05109 3.5 2.25 3.5H3.75V4.25C3.75 4.44891 3.82902 4.63968 3.96967 4.78033C4.11032 4.92098 4.30109 5 4.5 5C4.69891 5 4.88968 4.92098 5.03033 4.78033C5.17098 4.63968 5.25 4.44891 5.25 4.25V3.5H9.75V4.25C9.75 4.44891 9.82902 4.63968 9.96967 4.78033C10.1103 4.92098 10.3011 5 10.5 5C10.6989 5 10.8897 4.92098 11.0303 4.78033C11.171 4.63968 11.25 4.44891 11.25 4.25V3.5H12.75C12.9489 3.5 13.1397 3.57902 13.2803 3.71967C13.421 3.86032 13.5 4.05109 13.5 4.25V6.5Z" fill="#616161" />
          </svg>
          {ConteudoOBJ.data}
        </div>
      </div>
    </div>
  )
}