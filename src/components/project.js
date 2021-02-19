import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'



function Project (props) {
  const {_rawBody, title, categories, mainImage, members, publishedAt, relatedProjects} = props
  return (
    <article className="flex-col">
      {props.mainImage && mainImage.asset && (
        <div className="flex bg-yellow-50 ">
          <img
            className="flex-1 max-h-64 md:max-h-96 object-cover"
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className="flex-1">
          <div className="flex-1">
            <h1 className="text-2xl font-bold p-4">{title}</h1>
            <div className="p-4 text-left">
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
            </div>
          </div>
          <aside className="">
            {publishedAt && (
              <div className="text-sm m-4 text-gray-600">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title='Project members' />}
            {categories && categories.length > 0 && (
              <div className="border-t-2 m-8">
                <h3 className="text-base m-2">Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className="border-t-2 bg-gray-300 m-8">
                <h3 className="text-base m-2">Related projects</h3>
                <ul className="list-none m-3 p-0">
                  {relatedProjects.map(project => (
                    <li className="inline-block no-underline p-1" key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project
