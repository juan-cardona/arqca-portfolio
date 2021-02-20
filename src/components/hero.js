import React from 'react'
import Image from "./image"

function HeroSection(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
    <div className="grid grid-cols-1 overflow-hidden justify-between max-h-40 md:max-h-96 object-cover gap-6 ">
      <Image/>             
    </div>
    <div className="md:grid md:grid-rows-2  md:ml-6 md:p-8 md:justify-center md:items-center">
    <h2 className="grid text-sm mt-2  p-6">Made Architects Studio is an award-winning architectural and interior design practice delivering projects in aged care, retirement living, healthcare, hospitality, commercial, retail and residential sectors.

MA Studio is currently running a Master of Architecture Design Thesis studio at the University of Melbourne.</h2>
    <div className="inline-grid grid-cols-3 pl-8 justify-between">
    <a href="/page-2" className="p-2 text-blue-500"> Contacto</a>
    <a href="/archive" className="p-2 text-blue-500"> Proyectos</a>
    <a href="/page-2" className="p-2 text-blue-500"> Nosotros</a>
    </div>
    </div>
    </div>
  
  )
}

export default HeroSection
