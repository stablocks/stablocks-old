import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import DashboardHeading from 'src/components/DashboardHeading'
import Button from 'src/components/Button'

const ProfilePage = () => {
  const { logOut } = useAuth()
  const title = 'Profile'
  return (
    <>
      <DashboardHeading title={title}>
        <Button title="Logout" as="button" onClick={logOut} />
      </DashboardHeading>
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
