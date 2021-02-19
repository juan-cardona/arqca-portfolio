import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'


export default ({node}) => {
  if (!node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(node.asset._ref, {maxWidth: 675}, clientConfig.sanity)

  return (
    <figure className="m-8 ">
      <Img fluid={fluidProps} alt={node.alt} />
      {node.caption && <figcaption className="text-sm m-2">{node.caption}</figcaption>}
    </figure>
  )
}
