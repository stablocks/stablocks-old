import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { profileTabs } from 'src/lib/dashboardTabs'

const UserSettingsPage = () => {
  const breadcrumbs = [
    { title: 'Profile', to: routes.profile() },
    { title: 'User Settings', to: routes.userSettings() },
  ]
  return (
    <>
      <DashboardHeading
        title="User Settings"
        tabs={profileTabs}
        breadcrumbs={breadcrumbs}
      />
      <p>
        Find me in{' '}
        <code>./web/src/pages/UserSettingsPage/UserSettingsPage.js</code>
      </p>
      <p>
        My default route is named <code>userSettings</code>, link to me with `
        <Link to={routes.userSettings()}>UserSettings</Link>`
      </p>
    </>
  )
}

export default UserSettingsPage
