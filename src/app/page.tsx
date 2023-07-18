import Image from "next/image"
import Conteudo from "./conteudo"
import Nav from "./nav/index"
import SideBarM from "./sidebarm"
import rodrigo from  "../../public/rodrigo.png"

export default function Home() {

  return (
    <main className="md:h-full overflow-hidden">
       <Nav />
      <div className="flex p-5 md:p-0 bg-slate-900">
      <Image src={rodrigo} alt='logo rodrigo menezes 'width={85} className="absolute drop-shadow-dark3" />
        <SideBarM />
      </div>
      <Conteudo />
    </main>
  )
}
