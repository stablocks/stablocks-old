import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import OrganizationForm from 'src/components/Services/Organizations/OrganizationForm'

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
const UPDATE_ORGANIZATION_MUTATION = gql`
  mutation UpdateOrganizationMutation(
    $id: String!
    $input: UpdateOrganizationInput!
  ) {
    updateOrganization(id: $id, input: $input) {
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

export const Success = ({ organization }) => {
  const [updateOrganization, { loading, error }] = useMutation(
    UPDATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Organization updated')
        navigate(routes.servicesOrganizations())
      },
    }
  )

  const onSave = (input, id) => {
    updateOrganization({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Organization {organization.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrganizationForm
          organization={organization}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
