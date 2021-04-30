import { Link, navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, FieldError, Submit } from '@redwoodjs/forms'

const LoginPage = () => {
  const { logIn, currentUser } = useAuth()
  const onSubmit = (data) => {
    logIn({
      email: data.email,
    }).then(() => {
      navigate(routes.home())
    })
  }

  if (currentUser) navigate(routes.dashboard())

  return (
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
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Form onSubmit={onSubmit} className="space-y-6">
            <div>
              <Label
                name="email"
                className="block text-sm font-medium text-gray-700"
                errorClassName="block text-sm font-medium text-red-700"
              >
                Email Address
              </Label>
              <div className="mt-1">
                <TextField
                  name="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  errorClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  validation={{
                    required: true,
                    pattern: {
                      value: /[^@]+@[^\.]+\..+/,
                    },
                  }}
                />
              </div>
              <FieldError name="email" className="error-message" />
            </div>

            <div>
              <Submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send sign in link to email
              </Submit>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
