"use client"
import React, { useEffect, useState } from 'react';

export default function Nav() {
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['< Rodrigo-Menezes />'];

  useEffect(() => {
    let currentText = '';

    const interval = setInterval(() => {
      if (currentText.length === words[currentWordIndex].length) {
        // Palavra completa, não faz nada
        clearInterval(interval);
      } else {
        // Adiciona a próxima letra à palavra atual
        currentText = words[currentWordIndex].slice(0, currentText.length + 1);
        setText(currentText);
      }
    }, 100); // Velocidade de digitação em milissegundos

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
    }, 15); // Tempo de espera antes de começar a escrever a próxima palavra

    return () => clearTimeout(timeout);
  }, [currentWordIndex, words.length]);


  return (
    <div className="bg-slate-900 z-20 fixed w-screen flex justify-between items-center border-b border-prata h-20">
      <div className="pl-6 py-3 flex justify-center items-center text-prata">
        <p className="font-bold text-2xl">{text}</p>
        <p className="text-2xl animate-pulse">|</p>
      </div>
      <div className="flex justify-center items-center gap-12 text-prata">
        <p className="relative group mx-5">
          <a href='#sobre' className="flex justify-center items-center uppercase">Sobre</a>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500"></span>
        </p>
        <p className="relative group mx-5">
          <a href='#sobre' className="flex justify-center items-center uppercase">Skills</a>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500"></span>
        </p>
        <p className="relative group mx-5">
          <a href='#sobre' className="flex justify-center items-center uppercase">Serviços</a>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500"></span>
        </p>
        <p className="relative group mx-5">
          <a href='#sobre' className="flex justify-center items-center uppercase">Portifólio</a>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-azul to-prata group-hover:w-[100%] clip  transition-all duration-500"></span>
        </p>
        <div className="pr-5">
          <svg width="54" height="30" viewBox="0 0 54 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="52" height="28" rx="14" stroke="#B2CAD8" stroke-width="2" />
            <rect x="5" y="6" width="18" height="18" rx="9" fill="#B2CAD8" />
          </svg>
        </div>
      </div>

    </div>
  )
}