import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {ucfirst} from '../lib/string-utils'


function RoleList ({items, title}) {
  return (
    <div className="m-8 border-t-2 bg-gray-200">
      <h2 className="text-base m-2">{title}</h2>
      <ul className="list-none m-0 p-0">
        {items.map(item => (
          <li key={item._key} className="text-sm m-4 flex justify-center items-center">
            <div className="flex-1 ml-3">
              <div className="relative w-3 h-3 bg-gray-200 rounded-md overflow-hidden">
                {item.person && item.person.image && item.person.image.asset && (
                  <img
                    className="w-full h-full align-top object-cover"
                    src={imageUrlFor(buildImageObj(item.person.image))
                      .width(100)
                      .height(100)
                      .fit('crop')
                      .url()}
                    alt=''
                  />
                )}
              </div>
            </div>
            <div>
              <div>
                <strong>{(item.person && item.person.name) || <em>Missing name</em>}</strong>
              </div>
              {item.roles && (
                <div>
                  {item.roles.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>
                      case idx === item.roles.length - 1:
                        return <span key={role}> & {role}</span>
                      default:
                        return <span key={role}>, {role}</span>
                    }
                  })}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoleList
