import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'


function ProjectPreview (props) {
  return (
    <Link className=" flex-col md:flex-row" to={`/project/${props.slug.current}`}>
      <div className="flex-1 bg-yellow-100">
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
            className="flex-1 w-full h-1/3 object-cover "
          />
        )}
      </div>
      <h3 className="hover:underline">{props.title}</h3>
      {props._rawExcerpt && (
        <div className="m-2">
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default ProjectPreview
