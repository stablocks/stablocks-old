import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Services/Organizations/OrganizationsCell'

const DELETE_ORGANIZATION_MUTATION = gql`
  mutation DeleteOrganizationMutation($id: String!) {
    deleteOrganization(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const OrganizationsList = ({ organizations }) => {
  const [deleteOrganization] = useMutation(DELETE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('Organization deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete organization ' + id + '?')) {
      deleteOrganization({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Stripe id</th>
            <th>Email</th>
            <th>Communications</th>
            <th>Payroll</th>
            <th>Hr</th>
            <th>Accounting</th>
            <th>Recruiting</th>
            <th>Crm</th>
            <th>Marketing</th>
            <th>Project management</th>
            <th>Helpdesk</th>
            <th>Task tracking</th>
            <th>Updated at</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((organization) => (
            <tr key={organization.id}>
              <td>{truncate(organization.id)}</td>
              <td>{truncate(organization.name)}</td>
              <td>{truncate(organization.slug)}</td>
              <td>{truncate(organization.stripeId)}</td>
              <td>{checkboxInputTag(organization.email)}</td>
              <td>{checkboxInputTag(organization.communications)}</td>
              <td>{checkboxInputTag(organization.payroll)}</td>
              <td>{checkboxInputTag(organization.hr)}</td>
              <td>{checkboxInputTag(organization.accounting)}</td>
              <td>{checkboxInputTag(organization.recruiting)}</td>
              <td>{checkboxInputTag(organization.crm)}</td>
              <td>{checkboxInputTag(organization.marketing)}</td>
              <td>{checkboxInputTag(organization.projectManagement)}</td>
              <td>{checkboxInputTag(organization.helpdesk)}</td>
              <td>{checkboxInputTag(organization.taskTracking)}</td>
              <td>{timeTag(organization.updatedAt)}</td>
              <td>{timeTag(organization.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.servicesOrganization({ id: organization.id })}
                    title={'Show organization ' + organization.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.servicesEditOrganization({
                      id: organization.id,
                    })}
                    title={'Edit organization ' + organization.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete organization ' + organization.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(organization.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrganizationsList
