import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { organizationTabs } from 'src/lib/dashboardTabs'

const EmployeesPage = () => {
  return (
    <>
      <DashboardHeading title="Employees" tabs={organizationTabs} />
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
