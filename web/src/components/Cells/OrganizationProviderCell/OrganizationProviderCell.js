import { PlusCircleIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FIND_ORGANIZATION {
    organizationProvider {
      id
      name
      email
      communications
      payroll
      hr
      accounting
      recruiting
      crm
      marketing
      projectManagement
      helpdesk
      taskTracking
    }
  }
`

export const OrganizationContext = React.createContext('')

export const Loading = () => (
  <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center p-4">
    <span className="sr-only">Loading...</span>
    <PlusCircleIcon className="h-12 w-12 text-gray-400 animate-spin" />
  </div>
)

export const Empty = () => {
  console.error('Cannot get organization')
  return <></>
}

export const Success = ({ organizationProvider, children }) => {
  return (
    <OrganizationContext.Provider value={organizationProvider}>
      {children}
    </OrganizationContext.Provider>
  )
}
