import { Link, routes } from '@redwoodjs/router'
import { OrganizationContext } from 'src/components/Cells/OrganizationProviderCell'
import DashboardHeading from 'src/components/DashboardHeading'
import { organizationTabs } from 'src/lib/dashboardTabs'

const EmployeesPage = () => {
  const organization = React.useContext(OrganizationContext)

  const breadcrumbs = [
    { title: organization?.name, to: routes.contacts() },
    { title: 'Employees', to: routes.employees() },
  ]
  return (
    <>
      <DashboardHeading
        title="Employees"
        tabs={organizationTabs}
        breadcrumbs={breadcrumbs}
      />
      <p>
        Find me in <code>./web/src/pages/EmployeesPage/EmployeesPage.js</code>
      </p>
      <p>
        My default route is named <code>employees</code>, link to me with `
        <Link to={routes.employees()}>Employees</Link>`
      </p>
    </>
  )
}

export default EmployeesPage
