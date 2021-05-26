import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { recruitTabs } from 'src/lib/dashboardTabs'

const JobsPage = () => {
  return (
    <>
      <h1>JobsPage</h1>
      <p>
        Find me in <code>./web/src/pages/JobsPage/JobsPage.js</code>
      </p>
      <p>
        My default route is named <code>jobs</code>, link to me with `
        <Link to={routes.jobs()}>Jobs</Link>`
      </p>
    </>
  )
}

export default JobsPage
