import { Link, routes } from '@redwoodjs/router'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'

const BackButton = ({ page }) => {
  return (
    <Link
      to={routes.tickets()}
      className="text-xs -mt-2 mb-2 inline-block flex items-center py-1 text-indigo-400"
    >
      <ArrowNarrowLeftIcon className="h-4 w-4 mr-1" />
      back to {page}
    </Link>
  )
}

export default BackButton
