import { Link } from '@redwoodjs/router'

const OrganizationCTA = (props) => {
  console.log(props)
  return (
    <div className="p-6 flex-1 min-w-1/2">
      <div className="bg-indigo-500 rounded-3xl">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          {props.icon && (
            <props.icon
              aria-hidden="true"
              className="h-16 w-16 text-indigo-400 mx-auto mb-2 bg-white p-4 rounded-full"
            />
          )}
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {props.title}
          </h2>
          {props.description && (
            <p className="mt-4 text-lg leading-6 text-white text-opacity-80">
              {props.description}
            </p>
          )}
          <Link
            to={props.to}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-500 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            {props.button}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrganizationCTA
