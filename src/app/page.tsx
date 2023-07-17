import Conteudo from "./conteudo"
import Nav from "./nav/index"
import RodrigoLogo from "./nome/RodrigoLogo"
import SideBarM from "./sidebarm"
export default function Home() {
  return (
    <main className="md:h-[615px] bg-slate-900 overflow-hidden">
       <Nav />
      <div className="flex pt-4 md:p-0">
        <RodrigoLogo />
        <SideBarM />
      </div>
      <Conteudo />
    </main>
  )
}
