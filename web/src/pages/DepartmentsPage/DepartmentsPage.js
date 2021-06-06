import { Link, routes } from '@redwoodjs/router'
import { OrganizationContext } from 'src/components/Cells/OrganizationProviderCell'
import DashboardHeading from 'src/components/DashboardHeading'
import { organizationTabs } from 'src/lib/dashboardTabs'

const DepartmentsPage = () => {
  const organization = React.useContext(OrganizationContext)

  const breadcrumbs = [
    { title: organization?.name, to: routes.contacts() },
    { title: 'Departments', to: routes.departments() },
  ]
  return (
    <>
      <DashboardHeading
        title="Departments"
        tabs={organizationTabs}
        breadcrumbs={breadcrumbs}
      />
      <p>
        Find me in{' '}
        <code>./web/src/pages/DepartmentsPage/DepartmentsPage.js</code>
      </p>
      <p>
        My default route is named <code>departments</code>, link to me with `
        <Link to={routes.departments()}>Departments</Link>`
      </p>
    </>
  )
}

export default DepartmentsPage
