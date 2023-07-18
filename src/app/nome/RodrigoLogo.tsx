"use client"
import React, { useEffect, useState } from 'react';
export default function RodrigoLogo() {

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
    <div className='flex justify-center items-center'>
    <p className="font-bold md:text-2xl bg-gradient-to-r text-transparent from-azul to-prata bg-clip-text">{text}</p>
    <p className="text-2xl animate-pulse bg-gradient-to-r text-transparent from-azul to-prata bg-clip-text">|</p>
    </div>
  )
}