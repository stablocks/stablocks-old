import Loader from 'src/components/Loader'

export const QUERY = gql`
  query FIND_ORGANIZATION($slug: String!) {
    organization: publicOrganizationProvider(slug: $slug) {
      id
      name
      slug
      helpdesk
      recruiting
    }
  }
`

export const OrganizationContext = React.createContext('')

export const Loading = () => <Loader />

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
