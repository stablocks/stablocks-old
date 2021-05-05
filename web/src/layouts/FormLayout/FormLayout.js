import { Link, routes } from '@redwoodjs/router'

const TitleContext = React.createContext({
  title: 'Sign in to your account',
  setTitle: () => {},
})

const FormLayout = ({ children }) => {
  const [title, setTitle] = React.useState('Sign in to your account')
  const value = { title, setTitle }

  return (
    <TitleContext.Provider value={value}>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to={routes.home()} className="mx-auto contents">
            <img
              className="h-12 w-auto mx-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </TitleContext.Provider>
  )
}

export default FormLayout
