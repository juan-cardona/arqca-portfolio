import {Link} from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'


function ProjectPreviewGrid (props) {
  return (
    <div className="m-6 ">
      {props.title && <h2 className="text-md tracking-wider font-semibold uppercase m-8">{props.title}</h2>}
      <ul className="m-0 p-0 grid grid-cols-1 md:grid-cols-3 gap-6">
        {props.nodes &&
          props.nodes.map(node => (
            <li className="" key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className="text-right mt-4 text-sm">
          <Link className="inline-block p-2" to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
