import PrevIcon from '@/public/icons/prev.svg'
import NextIcon from '@/public/icons/next.svg'

interface PaginationProps {
  page: number
  total: number
  pageSize: number
  className?: string
  onChange: (page: number) => void
}

const Pagination = (props: PaginationProps) => {
  const totalPage = Math.ceil(props.total / props.pageSize)

  const btnCommonClass =
    'flex items-center justify-center w-8 h-8 mx-1 text-gray-500 rounded cursor-pointer transition enabled:hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-400 disabled:hover:text-gray-400 disabled:cursor-not-allowed'

  return (
    <div className={`flex justify-center ${props.className}`}>
      <button
        className={btnCommonClass}
        disabled={props.page === 1}
        onClick={() => props.onChange(props.page - 1)}
      >
        <PrevIcon className="size-6" />
      </button>
      {[...Array(totalPage)].map((_, index) => (
        <button
          className={`${btnCommonClass} ${
            props.page === index + 1 && 'bg-gray-300'
          }`}
          key={index}
          disabled={props.page === index + 1}
          onClick={() => props.onChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={btnCommonClass}
        disabled={props.page === totalPage}
        onClick={() => props.onChange(props.page + 1)}
      >
        <NextIcon className="size-6" />
      </button>
    </div>
  )
}

export default Pagination
