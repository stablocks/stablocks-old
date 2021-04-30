import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import DashboardHeading from 'src/components/DashboardHeading'

const DashboardPage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <DashboardHeading title={`Welcome, ${currentUser.firstName}!`} />
      <p>
        Find me in <code>./web/src/pages/DashboardPage/DashboardPage.js</code>
      </p>
      <p>
        My default route is named <code>dashboard</code>, link to me with `
        <Link to={routes.dashboard()}>Dashboard</Link>`
      </p>
    </>
  )
}

export default DashboardPage
