import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { recruitTabs } from 'src/lib/dashboardTabs'

const RecruitPage = () => {
  return (
    <>
      <h1>RecruitPage</h1>
      <p>
        Find me in <code>./web/src/pages/RecruitPage/RecruitPage.js</code>
      </p>
      <p>
        My default route is named <code>recruit</code>, link to me with `
        <Link to={routes.recruit()}>Recruit</Link>`
      </p>
    </>
  )
}

export default RecruitPage
