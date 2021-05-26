import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { organizationTabs } from 'src/lib/dashboardTabs'

const DepartmentsPage = () => {
  return (
    <>
      <DashboardHeading title="Departments" tabs={organizationTabs} />
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
