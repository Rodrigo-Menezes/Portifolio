import Cardqualifica from "../Cardqualifica";

export default function Qualificacao() {
  return (
    <div>
      <div className="flex justify-center md:justify-start flex-wrap gap-1 md:gap-5 mt-6">
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