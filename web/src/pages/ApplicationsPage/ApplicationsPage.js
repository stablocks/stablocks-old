import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { recruitTabs } from 'src/lib/dashboardTabs'

const ApplicationsPage = () => {
  return (
    <>
      <DashboardHeading title="Applications" tabs={recruitTabs} />
      <p>
        Find me in{' '}
        <code>./web/src/pages/ApplicationsPage/ApplicationsPage.js</code>
      </p>
      <p>
        My default route is named <code>applications</code>, link to me with `
        <Link to={routes.applications()}>Applications</Link>`
      </p>
    </>
  )
}

export default ApplicationsPage
