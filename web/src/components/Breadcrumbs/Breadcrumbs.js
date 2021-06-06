import { Link } from '@redwoodjs/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Breadcrumbs = ({ items }) => {
  return (
    <div className="mb-2">
      <nav className="sm:hidden" aria-label="Back">
        <Link
          to={items[items.length - 2].to}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon
            className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Back
        </Link>
      </nav>
      <nav className="hidden sm:flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, i) => (
            <li key={i}>
              <div className={`${i !== 0 ? 'flex items-center' : ''}`}>
                {i !== 0 && (
                  <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                )}
                <Link
                  to={item.to}
                  className={`${
                    i !== 0 ? 'ml-2 ' : ''
                  }text-sm font-medium text-gray-500 hover:text-gray-700`}
                >
                  {item.title}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs
