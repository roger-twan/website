import { Tags } from './index.page'

interface TagSideProps {
  tags: Tags
  currentTag: string
  total: number
  className?: string
  onTagClick: (tag: string) => void
}

const TagSideProps = (props: TagSideProps) => {
  const listCommonClasses =
    'text-sm font-light cursor-pointer my-2 transition transform hover:translate-x-1'
  return (
    <aside
      className={`${props.className} border-l ml-10 pl-6 mt-4 opacity-30 transition duration-500 delay-1000 hover:opacity-100 hover:delay-0`}
    >
      <ul className="sticky top-2 h-screen overflow-y-auto">
        <li
          className={`${listCommonClasses} ${
            props.currentTag === '' && '!font-bold'
          }`}
          onClick={() => props.onTagClick('')}
        >
          All
          <span className="text-sm text-gray-500 ml-2">{props.total}</span>
        </li>
        {Object.keys(props.tags).map((tag: string) => (
          <li
            className={`${listCommonClasses} ${
              props.currentTag === tag && '!font-bold'
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
    </aside>
  )
}

export default TagSideProps
