import {Link} from 'part:@sanity/base/router'
import FolderIcon from 'part:@sanity/base/folder-icon'
import FileIcon from 'part:@sanity/base/file-icon'
import React from 'react'

function getIconComponent (item) {
  if (item.icon) return item.icon
  if (!item.schemaType) return FileIcon
  return item.schemaType.icon || FolderIcon
}

function StructureMenuWidget (props) {
  return (
    <div className="grid p-0">
      <div className="grid items-center">
        <h3 className="font-bold text-lg">Edit your content</h3>
      </div>

      <div className="grid p-4 gap-4 grid-cols-1 overflow-x-auto border-t-2">
        {props.structure.items.map(item => {
          const Icon = getIconComponent(item)
          return (
            <div className="grid-cols-1" key={item.id}>
              <Link className="block p-2 rounded-md no-underline text-center box-border" href={`/desk/${item.id}`}>
                <div className="text-sm">
                  <Icon />
                </div>
                <div>{item.title}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StructureMenuWidget
