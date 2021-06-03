import Organization from 'src/components/Services/Organizations/Organization'

export const QUERY = gql`
  query FIND_ORGANIZATION_BY_ID($id: String!) {
    organization: organization(id: $id) {
      id
      name
      slug
      stripeId
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
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Organization not found</div>

export const Success = ({ organization }) => {
  return <Organization organization={organization} />
}
