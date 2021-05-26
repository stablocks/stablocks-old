import { useState } from 'react'
import { Link, navigate, routes, RouteFocus } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import Helmet from 'react-helmet'
import { TitleContext } from 'src/layouts/FormLayout'
import { Form, Label, TextField, FieldError, Submit } from '@redwoodjs/forms'

const LoginPage = () => {
  const [linkSent, setLinkSent] = useState(false)
  const [email, setEmail] = useState('')
  const { logIn, currentUser } = useAuth()
  const { title, setTitle } = React.useContext(TitleContext)

  const onSubmit = (data) => {
    logIn({
      email: data.email,
    }).then(() => {
      setLinkSent(true)
    })
  }

  if (currentUser) navigate(routes.dashboard())

  React.useEffect(() => {
    setTitle('Login to your account')
  })

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {linkSent ? (
        <p className="text-center">
          Login link sent to <em>{email}</em>
        </p>
      ) : (
        <>
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
                <RouteFocus>
                  <TextField
                    name="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    errorClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    validation={{
                      required: true,
                      pattern: {
                        value: /[^@]+@[^\.]+\..+/,
                      },
                    }}
                  />
                </RouteFocus>
              </div>
              <FieldError name="email" className="error-message" />
            </div>

            <div>
              <Submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send login link to email
              </Submit>
            </div>
          </Form>
          <p className="text-gray-600 text-sm text-center mt-2">
            Need an account?{' '}
            <Link
              to={routes.signup()}
              className="font-semibold text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </>
      )}
    </>
  )
}

export default LoginPage
