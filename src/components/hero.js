import React from 'react'
import Image from "./image"


function HeroSection(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
    <div className="grid grid-cols-1 overflow-hidden justify-between max-h-40 md:max-h-96 object-cover gap-6 ">
      <Image/>             
    </div>
    <div className="md:grid md:grid-rows-2  md:ml-6 md:p-8 md:justify-center md:items-center">
    <h2 className="grid text-sm mt-2 md:mx-8 px-8 py-6">Convencidos de que la Arquitectura transmite sentimientos y emociones creamos <h2 className="font-extrabold">Arqca.</h2> un taller de Arquitectura Integral, que tiene como objetivo diseñar espacios Funcionales, Estéticos e integrales con el medio Ambiente.</h2>
    <div className="inline-grid grid-cols-3 pl-8 justify-between">
    <a href="/contacto" className="p-2 font-extrabold underline"> Contacto</a>
    <a href="/archive" className="p-2 font-extrabold underline"> Proyectos</a>
    <a href="/conocenos" className="p-2 font-extrabold underline"> Nosotros</a>
    </div>
    </div>
    </div>
  
  )
}

export default HeroSection
