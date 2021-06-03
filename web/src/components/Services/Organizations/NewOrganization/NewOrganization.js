import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import OrganizationForm from 'src/components/Services/Organizations/OrganizationForm'

import { QUERY } from 'src/components/Services/Organizations/OrganizationsCell'

const CREATE_ORGANIZATION_MUTATION = gql`
  mutation CreateOrganizationMutation($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      id
    }
  }
`

const NewOrganization = () => {
  const [createOrganization, { loading, error }] = useMutation(
    CREATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Organization created')
        navigate(routes.servicesOrganizations())
      },
    }
  )

  const onSave = (input) => {
    createOrganization({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Organization</h2>
      </header>
      <div className="rw-segment-main">
        <OrganizationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOrganization
