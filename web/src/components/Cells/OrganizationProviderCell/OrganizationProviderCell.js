import Loader from 'src/components/Loader'

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

export const Loading = () => <Loader />

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
