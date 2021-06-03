import { ClockIcon } from '@heroicons/react/outline'

const Loader = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 flex items-center justify-center p-4">
      <span className="sr-only">Loading...</span>
      <ClockIcon className="h-10 w-10 text-gray-400 animate-spin" />
    </div>
  )
}

export default Loader
