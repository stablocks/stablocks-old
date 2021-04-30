import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'

const ProfilePage = () => {
  return (
    <>
      <DashboardHeading title="Profile" />
      <p>
        Find me in <code>./web/src/pages/ProfilePage/ProfilePage.js</code>
      </p>
      <p>
        My default route is named <code>profile</code>, link to me with `
        <Link to={routes.profile()}>Profile</Link>`
      </p>
    </>
  )
}

export default ProfilePage
