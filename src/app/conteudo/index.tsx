"use client"
import SideBar from "./SideBar";
import Servicos from "./servicos";
import Skills from "./skills";
import Sobre from "./sobre"
import React, { useRef, useEffect } from 'react';

export default function Conteudo() {

  const componentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const { deltaY } = event as WheelEvent;

      if (deltaY > 0) {
        // Scroll para baixo
        const nextComponent = componentRefs.current.find(
          (ref) => ref && ref.getBoundingClientRect().top > 0
        );

        if (nextComponent) {
          nextComponent.scrollIntoView({ behavior: "smooth" });
        }
      } else if (deltaY < 0) {
        // Scroll para cima
        const visibleComponents = componentRefs.current.filter(
          (ref) => ref && ref.getBoundingClientRect().top <= 0
        );

        if (visibleComponents.length > 1) {
          const prevComponent = visibleComponents[visibleComponents.length - 2];
          prevComponent.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);


  return (
    <div className="flex flex-col md:flex-row">
      <SideBar />
      <div className="flex flex-col">
        <div id="sobre" ref={(ref) => (componentRefs.current[0] = ref)}>
          {<Sobre />}
        </div>
        <div id="skills" ref={(ref) => (componentRefs.current[1] = ref)}>
          {<Skills />}
        </div>
        <div id="servicos" ref={(ref) => (componentRefs.current[2] = ref)}>
          {<Servicos />}
        </div>

      </div>
    </div>
  )
}