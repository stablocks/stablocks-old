export const QUERY = gql`
  query FIND_ORGANIZATION {
    organizationProvider {
      id
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

export const OrganizationContext = React.createContext()

export const Loading = () => <p>Loading...</p>

export const Empty = () => {
  console.error('Cannot get organization')
  return <></>
}

export const Success = ({ organization, children }) => {
  return (
    <OrganizationContext.Provider value={organization}>
      {children}
    </OrganizationContext.Provider>
  )
}
