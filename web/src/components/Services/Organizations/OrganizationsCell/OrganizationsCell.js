import { Link, routes } from '@redwoodjs/router'

import Organizations from 'src/components/Services/Organizations/Organizations'

export const QUERY = gql`
  query ORGANIZATIONS {
    organizations {
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

export const Empty = () => {
  return <div className="rw-text-center">{'No organizations yet.'}</div>
}

export const Success = ({ organizations }) => {
  return <Organizations organizations={organizations} />
}
