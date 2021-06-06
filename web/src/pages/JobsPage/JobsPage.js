import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { recruitTabs } from 'src/lib/dashboardTabs'

const JobsPage = () => {
  const breadcrumbs = [
    { title: 'Recruit', to: routes.recruit() },
    { title: 'Jobs', to: routes.jobs() },
  ]
  return (
    <>
      <DashboardHeading
        title="Jobs"
        tabs={recruitTabs}
        breadcrumbs={breadcrumbs}
      />
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
