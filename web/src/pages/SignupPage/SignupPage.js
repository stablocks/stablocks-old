import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { toast } from '@redwoodjs/web/toast'
import Helmet from 'react-helmet'
import { TitleContext } from 'src/layouts/FormLayout'
import {
  Form,
  FormError,
  Label,
  TextField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

const CREATE_SIGNUP_MUTATION = gql`
  mutation CreateSignupMutation($input: CreateSignupInput!) {
    createSignup(input: $input) {
      id
    }
  }
`

const SignupPage = () => {
  const [linkSent, setLinkSent] = React.useState(false)
  const [email, setEmail] = React.useState()
  const { logIn, currentUser } = useAuth()
  const { title, setTitle } = React.useContext(TitleContext)

  const [createSignup, { loading, error }] = useMutation(
    CREATE_SIGNUP_MUTATION,
    {
      onCompleted: () => {
        toast.success('Account created')
        logIn({
          email: email,
        }).then(() => {
          setLinkSent(true)
        })
      },
    }
  )

  const onSubmit = (input) => {
    createSignup({ variables: { input } })
  }

  if (currentUser) navigate(routes.dashboard())

  React.useEffect(() => {
    setTitle('Sign up for a free trial')
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
          <Form onSubmit={onSubmit} error={error} className="space-y-6">
            <FormError
              error={error}
              wrapperClassName="rw-form-error-wrapper"
              titleClassName="rw-form-error-title"
              listClassName="rw-form-error-list"
            />
            <div>
              <Label
                name="firstName"
                className="block text-sm font-medium text-gray-700"
                errorClassName="block text-sm font-medium text-red-700"
              >
                First Name
              </Label>
              <div className="mt-1">
                <TextField
                  name="firstName"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  errorClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  validation={{
                    required: true,
                  }}
                />
              </div>
              <FieldError name="firstName" className="error-message" />
            </div>
            <div>
              <Label
                name="lastName"
                className="block text-sm font-medium text-gray-700"
                errorClassName="block text-sm font-medium text-red-700"
              >
                Last Name
              </Label>
              <div className="mt-1">
                <TextField
                  name="lastName"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  errorClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  validation={{
                    required: true,
                  }}
                />
              </div>
              <FieldError name="lastName" className="error-message" />
            </div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <Label
                name="organizationName"
                className="block text-sm font-medium text-gray-700"
                errorClassName="block text-sm font-medium text-red-700"
              >
                Company Name
              </Label>
              <div className="mt-1">
                <TextField
                  name="organizationName"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  errorClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  validation={{
                    required: true,
                  }}
                />
              </div>
              <FieldError name="organizationName" className="error-message" />
            </div>

            <div>
              <Submit
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up for a free trial
              </Submit>
            </div>
          </Form>
          <p className="text-gray-600 text-sm text-center mt-2">
            Already have an account?{' '}
            <Link to={routes.login()} className="font-semibold text-indigo-500">
              Login
            </Link>
          </p>
        </>
      )}
    </>
  )
}

export default SignupPage
