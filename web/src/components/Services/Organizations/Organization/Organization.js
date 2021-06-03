import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Services/Organizations/OrganizationsCell'

const DELETE_ORGANIZATION_MUTATION = gql`
  mutation DeleteOrganizationMutation($id: String!) {
    deleteOrganization(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Organization = ({ organization }) => {
  const [deleteOrganization] = useMutation(DELETE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('Organization deleted')
      navigate(routes.servicesOrganizations())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete organization ' + id + '?')) {
      deleteOrganization({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Organization {organization.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{organization.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{organization.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{organization.slug}</td>
            </tr>
            <tr>
              <th>Stripe id</th>
              <td>{organization.stripeId}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{checkboxInputTag(organization.email)}</td>
            </tr>
            <tr>
              <th>Communications</th>
              <td>{checkboxInputTag(organization.communications)}</td>
            </tr>
            <tr>
              <th>Payroll</th>
              <td>{checkboxInputTag(organization.payroll)}</td>
            </tr>
            <tr>
              <th>Hr</th>
              <td>{checkboxInputTag(organization.hr)}</td>
            </tr>
            <tr>
              <th>Accounting</th>
              <td>{checkboxInputTag(organization.accounting)}</td>
            </tr>
            <tr>
              <th>Recruiting</th>
              <td>{checkboxInputTag(organization.recruiting)}</td>
            </tr>
            <tr>
              <th>Crm</th>
              <td>{checkboxInputTag(organization.crm)}</td>
            </tr>
            <tr>
              <th>Marketing</th>
              <td>{checkboxInputTag(organization.marketing)}</td>
            </tr>
            <tr>
              <th>Project management</th>
              <td>{checkboxInputTag(organization.projectManagement)}</td>
            </tr>
            <tr>
              <th>Helpdesk</th>
              <td>{checkboxInputTag(organization.helpdesk)}</td>
            </tr>
            <tr>
              <th>Task tracking</th>
              <td>{checkboxInputTag(organization.taskTracking)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(organization.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(organization.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.servicesEditOrganization({ id: organization.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(organization.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Organization
