import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { organizationTabs } from 'src/lib/dashboardTabs'

const SettingsPage = () => {
  return (
    <>
      <DashboardHeading title="Organization Settings" tabs={organizationTabs} />
      <p>
        Find me in <code>./web/src/pages/SettingsPage/SettingsPage.js</code>
      </p>
      <p>
        My default route is named <code>settings</code>, link to me with `
        <Link to={routes.settings()}>Settings</Link>`
      </p>
    </>
  )
}

export default SettingsPage
