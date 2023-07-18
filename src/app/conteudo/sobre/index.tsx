import Card from "./Card";
import Cardqualifica from "./Cardqualifica";

export default function Sobre() {

  const svg =
    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.14548 6.6859L5.14336 6.68755L5.14135 6.68943L5.14548 6.6859ZM14.5128 6.51724C14.4473 6.45662 14.3747 6.40357 14.2964 6.35919C14.1855 6.2965 14.0624 6.25632 13.9348 6.24115C13.8071 6.22597 13.6775 6.23612 13.5541 6.27096C13.4307 6.3058 13.316 6.36459 13.2171 6.44371C13.1183 6.52282 13.0374 6.62057 12.9795 6.73092C12.6553 7.34456 12.2082 7.89066 11.6639 8.3379C11.7471 7.88728 11.7891 7.43051 11.7893 6.97284C11.7911 5.58055 11.4088 4.21267 10.6814 3.00849C9.95396 1.8043 8.90743 0.806819 7.64831 0.117599C7.50961 0.0420552 7.3532 0.00160591 7.19377 4.68429e-05C7.03434 -0.00151223 6.87711 0.03587 6.73683 0.108686C6.59656 0.181502 6.47784 0.287364 6.39181 0.416339C6.30578 0.545314 6.25527 0.693174 6.24501 0.846044C6.19235 1.70333 5.95908 2.54143 5.55935 3.30954C5.15961 4.07766 4.60173 4.75981 3.91951 5.31467L3.70262 5.48419C2.98923 5.94539 2.35776 6.51393 1.83247 7.16799C1.01594 8.15632 0.450299 9.31384 0.180416 10.5488C-0.0894666 11.7837 -0.0561707 13.062 0.277663 14.2824C0.611497 15.5028 1.23669 16.6317 2.10365 17.5796C2.97062 18.5274 4.05552 19.2682 5.27231 19.7431C5.41518 19.7991 5.57022 19.8206 5.72375 19.8055C5.87729 19.7904 6.0246 19.7393 6.15269 19.6566C6.28078 19.5738 6.38572 19.4621 6.45825 19.3312C6.53078 19.2003 6.56866 19.0543 6.56857 18.906C6.56789 18.8101 6.55209 18.7148 6.5217 18.6235C6.31116 17.8631 6.25054 17.0716 6.34295 16.2898C7.23341 17.9035 8.66277 19.1825 10.4012 19.9214C10.6134 20.0126 10.8533 20.0249 11.0744 19.9558C12.4479 19.5299 13.6853 18.7736 14.6689 17.7588C15.6525 16.744 16.3497 15.5044 16.6942 14.1578C17.0388 12.8112 17.0192 11.4023 16.6374 10.0651C16.2556 8.72776 15.5242 7.50647 14.5128 6.51724ZM10.8382 18.1184C10.0179 17.719 9.29428 17.1582 8.7144 16.4724C8.13451 15.7866 7.71133 14.9913 7.47238 14.1381C7.39941 13.8508 7.34296 13.5598 7.30329 13.2666C7.27641 13.0798 7.18945 12.9058 7.05459 12.7689C6.91972 12.6319 6.74369 12.5389 6.55109 12.5028C6.49176 12.4916 6.43142 12.486 6.37095 12.486C6.20555 12.486 6.04306 12.5278 5.89987 12.6074C5.75667 12.6869 5.63783 12.8013 5.55534 12.939C4.77452 14.233 4.38185 15.7094 4.42084 17.2046C3.73409 16.6916 3.16016 16.0527 2.73228 15.325C2.30441 14.5973 2.03112 13.7953 1.92824 12.9654C1.82537 12.1355 1.89495 11.2942 2.13297 10.4903C2.37099 9.68643 2.7727 8.93593 3.31483 8.2823C3.72646 7.7686 4.22303 7.32327 4.78475 6.96406C4.80907 6.94897 4.8324 6.93246 4.85459 6.91461C4.85459 6.91461 5.13382 6.69263 5.14336 6.68755C6.48408 5.59802 7.43763 4.13383 7.8712 2.49894C8.89654 3.40963 9.58024 4.6201 9.81612 5.9424C10.052 7.26469 9.82689 8.62482 9.17571 9.81159C9.08968 9.96995 9.05439 10.1492 9.07429 10.3269C9.09419 10.5045 9.16839 10.6724 9.28753 10.8096C9.40667 10.9467 9.56542 11.0469 9.74374 11.0974C9.92207 11.148 10.112 11.1467 10.2895 11.0937C11.731 10.6595 12.9995 9.81151 13.9242 8.66377C14.4799 9.45245 14.8432 10.3515 14.9871 11.2938C15.1309 12.2362 15.0516 13.1975 14.755 14.1063C14.4583 15.0151 13.9521 15.8479 13.2739 16.5425C12.5957 17.2372 11.7632 17.7759 10.8382 18.1184Z" fill="#f30c41" />
    </svg>
  const svg2 =
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14C4.80222 14 4.60888 14.0586 4.44443 14.1685C4.27998 14.2784 4.15181 14.4346 4.07612 14.6173C4.00043 14.8 3.98063 15.0011 4.01921 15.1951C4.0578 15.3891 4.15304 15.5673 4.29289 15.7071C4.43275 15.847 4.61093 15.9422 4.80491 15.9808C4.99889 16.0194 5.19996 15.9996 5.38268 15.9239C5.56541 15.8482 5.72159 15.72 5.83147 15.5556C5.94135 15.3911 6 15.1978 6 15C6 14.7348 5.89464 14.4804 5.70711 14.2929C5.51957 14.1054 5.26522 14 5 14ZM17.06 10L18.29 8.77C18.8518 8.2075 19.1674 7.445 19.1674 6.65C19.1674 5.855 18.8518 5.0925 18.29 4.53L15.46 1.71C14.8975 1.1482 14.135 0.83264 13.34 0.83264C12.545 0.83264 11.7825 1.1482 11.22 1.71L10 2.94C9.98429 2.15479 9.6613 1.40706 9.10039 0.857361C8.53947 0.307664 7.78536 -0.000157028 7 6.00945e-08H3C2.20435 6.00945e-08 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V13C20.0002 12.2146 19.6923 11.4605 19.1426 10.8996C18.5929 10.3387 17.8452 10.0157 17.06 10ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H7C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V17ZM10 5.76L12.64 3.12C12.8274 2.93375 13.0808 2.82921 13.345 2.82921C13.6092 2.82921 13.8626 2.93375 14.05 3.12L16.88 6C17.0662 6.18736 17.1708 6.44081 17.1708 6.705C17.1708 6.96919 17.0662 7.22264 16.88 7.41L14 10.29L10 14.24V5.76ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H9.82C9.92258 17.7036 9.9799 17.3935 9.99 17.08L15.07 12H17C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13V17Z" fill="#0c4ac4" />
    </svg>
  const svg3 =
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0804 6.01673L11.052 0.763019C10.4994 0.271652 9.784 0 9.04258 0C8.30117 0 7.58576 0.271652 7.03314 0.763019L1.00482 6.01673C0.685685 6.30047 0.43102 6.64853 0.257778 7.03776C0.0845357 7.42698 -0.0033081 7.84842 9.52416e-05 8.27403V17.0036C9.52416e-05 17.7983 0.317658 18.5604 0.882923 19.1224C1.44819 19.6843 2.21485 20 3.01426 20H15.0709C15.8703 20 16.637 19.6843 17.2022 19.1224C17.7675 18.5604 18.0851 17.7983 18.0851 17.0036V8.26404C18.087 7.84011 17.9985 7.42059 17.8253 7.0332C17.6521 6.6458 17.3982 6.29935 17.0804 6.01673ZM11.052 18.0024H7.03314V13.0084C7.03314 12.7435 7.139 12.4894 7.32742 12.3021C7.51584 12.1148 7.77139 12.0096 8.03786 12.0096H10.0473C10.3138 12.0096 10.5693 12.1148 10.7577 12.3021C10.9462 12.4894 11.052 12.7435 11.052 13.0084V18.0024ZM16.0756 17.0036C16.0756 17.2685 15.9698 17.5225 15.7814 17.7098C15.5929 17.8972 15.3374 18.0024 15.0709 18.0024H13.0615V13.0084C13.0615 12.2137 12.7439 11.4515 12.1786 10.8896C11.6134 10.3276 10.8467 10.012 10.0473 10.012H8.03786C7.23846 10.012 6.47179 10.3276 5.90653 10.8896C5.34126 11.4515 5.0237 12.2137 5.0237 13.0084V18.0024H3.01426C2.74779 18.0024 2.49223 17.8972 2.30381 17.7098C2.11539 17.5225 2.00954 17.2685 2.00954 17.0036V8.26404C2.00972 8.12223 2.04027 7.98208 2.09918 7.85291C2.15808 7.72375 2.24397 7.60854 2.35114 7.51494L8.37947 2.27121C8.56282 2.11109 8.79853 2.02278 9.04258 2.02278C9.28664 2.02278 9.52235 2.11109 9.7057 2.27121L15.734 7.51494C15.8412 7.60854 15.9271 7.72375 15.986 7.85291C16.0449 7.98208 16.0755 8.12223 16.0756 8.26404V17.0036Z" fill="#e6e034" />
    </svg>

  return (
    <div  className=" w-screen md:h-screen md:pl-96 pt-10 md:pt-20 bg-slate-900">
      <h2 className="text-azul text-2xl py-2 text-center md:text-start">Sobre</h2>
      <h3 className="text-xs md:text-sm text-zinc-400 drop-shadow text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt nostrum, ducimus unde sint voluptatem optio voluptatum porro labore aliquam minima aut rerum amet, necessitatibus provident ipsum minus possimus harum?
      </h3>
      <div className="flex flex-wrap md:flex-row justify-center md:justify-start items-center gap-1 md:gap-5 mt-6">
        <Card
          icone={svg}
          text="Anos de experiência"
          number={20}
        />
        <Card
          icone={svg2}
          text="Projetos desenvolvidos"
          number={2}
        />
        <Card
          icone={svg3}
          text="empresas trabalhadas"
          number={2}
        />
      </div>
      <div className="flex flex-col justify-center items-center  md:justify-start md:flex-row md:items-end gap-2 mt-10">
        <h2 className="text-azul text-2xl">Qualificação</h2>
        <p className="text-prata md:pl-5">minha jornada pessoal</p>
      </div>
      <div className="flex text-prata px-5 md:px-0 gap-24 md:gap-44 my-3 border-b border-prata">
        <div className="flex gap-2 items-center justify-center">
          <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.4505 6.69535L23.257 6.03895L12.5158 0.071608H12.3845C12.3114 0.0406718 12.2355 0.0166967 12.1578 0H11.931H11.7162C11.6347 0.0167076 11.5548 0.0406723 11.4775 0.071608H11.3462L0.605026 6.03895C0.421354 6.14304 0.26858 6.29399 0.162291 6.4764C0.0560013 6.6588 0 6.86614 0 7.07726C0 7.28838 0.0560013 7.49572 0.162291 7.67813C0.26858 7.86054 0.421354 8.01149 0.605026 8.11558L3.57676 9.76256V15.4196C3.57676 16.3692 3.95398 17.2799 4.62544 17.9513C5.29689 18.6228 6.20758 19 7.15716 19H16.7049C17.6545 19 18.5652 18.6228 19.2366 17.9513C19.9081 17.2799 20.2853 16.3692 20.2853 15.4196V9.76256L22.6722 8.42588V11.8392C22.6722 12.1557 22.798 12.4593 23.0218 12.6831C23.2456 12.9069 23.5492 13.0327 23.8657 13.0327C24.1822 13.0327 24.4858 12.9069 24.7096 12.6831C24.9334 12.4593 25.0592 12.1557 25.0592 11.8392V7.73367C25.0588 7.52219 25.0023 7.31461 24.8953 7.13217C24.7884 6.94972 24.6349 6.79898 24.4505 6.69535ZM17.8984 15.4196C17.8984 15.7361 17.7726 16.0397 17.5488 16.2635C17.325 16.4873 17.0214 16.6131 16.7049 16.6131H7.15716C6.84063 16.6131 6.53707 16.4873 6.31325 16.2635C6.08944 16.0397 5.96369 15.7361 5.96369 15.4196V11.0873L11.3462 14.071L11.5253 14.1426H11.6327C11.7317 14.1551 11.832 14.1551 11.931 14.1426C12.0301 14.1551 12.1303 14.1551 12.2294 14.1426H12.3368C12.4002 14.1292 12.4607 14.105 12.5158 14.071L17.8984 11.0873V15.4196ZM11.931 11.6721L3.64837 7.06533L11.931 2.45854L20.2137 7.06533L11.931 11.6721Z" fill="#616161" />
          </svg>
          <h2>Educação</h2>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 4H14V3C14 2.20435 13.6839 1.44129 13.1213 0.87868C12.5587 0.316071 11.7956 0 11 0H9C8.20435 0 7.44129 0.316071 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V16C0 16.7956 0.316071 17.5587 0.87868 18.1213C1.44129 18.6839 2.20435 19 3 19H17C17.7956 19 18.5587 18.6839 19.1213 18.1213C19.6839 17.5587 20 16.7956 20 16V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4ZM8 3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2H11C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V4H8V3ZM18 16C18 16.2652 17.8946 16.5196 17.7071 16.7071C17.5196 16.8946 17.2652 17 17 17H3C2.73478 17 2.48043 16.8946 2.29289 16.7071C2.10536 16.5196 2 16.2652 2 16V10.95H5V12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13C6.26522 13 6.51957 12.8946 6.70711 12.7071C6.89464 12.5196 7 12.2652 7 12V10.95H13V12C13 12.2652 13.1054 12.5196 13.2929 12.7071C13.4804 12.8946 13.7348 13 14 13C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V10.95H18V16ZM18 9H2V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V9Z" fill="#616161" />
          </svg>
          <h2>Trabalho</h2>
        </div>
      </div>
      <div className="flex justify-center md:justify-start flex-wrap gap-1 mt-6">
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
        <Cardqualifica
          text1="eu"
          text="eutbm"
          data="02/02/2014"
        />
      </div>
    </div>
  )
}