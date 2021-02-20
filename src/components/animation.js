import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Image from "../components/image"

function AnimationSpring(props) {
  return (
    <div>
    <div className="grid grid-cols-1 overflow-hidden justify-between  max-h-40 object-cover gap-6 ">
              <Image/>             
    </div>
    <h2 className="grid text-sm mt-4 p-6">Made Architects Studio is an award-winning architectural and interior design practice delivering projects in aged care, retirement living, healthcare, hospitality, commercial, retail and residential sectors.

    MA Studio is currently running a Master of Architecture Design Thesis studio at the University of Melbourne.</h2>
    <a href="/page-2" className="p-6 text-blue-500"> Contacto</a>
    </div>
  
  )
}

export default AnimationSpring
