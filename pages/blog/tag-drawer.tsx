import Drawer from '@/components/drawer'
import { Tags } from './index.page'

interface TagDrawerProps {
  isOpen: boolean
  tags: Tags
  currentTag: string
  total: number
  onTagClick: (tag: string) => void
  onClose: () => void
}

const TagDrawer = (props: TagDrawerProps) => {
  const listCommonClasses = 'flex justify-between items-center border-b p-2'
  return (
    <Drawer open={props.isOpen} onClose={props.onClose}>
      <ul>
        <li
          className={`${listCommonClasses} ${
            props.currentTag === '' && 'font-bold'
          }`}
          onClick={() => props.onTagClick('')}
        >
          All
          <span className="text-sm text-gray-500 ml-2">{props.total}</span>
        </li>
        {Object.keys(props.tags).map((tag: string) => (
          <li
            className={`${listCommonClasses} ${
              props.currentTag === tag && 'font-bold'
            }`}
            key={tag}
            onClick={() => props.onTagClick(tag)}
          >
            {tag}
            <span className="text-sm text-gray-500 ml-2">
              {props.tags[tag]}
            </span>
          </li>
        ))}
      </ul>
    </Drawer>
  )
}

export default TagDrawer
