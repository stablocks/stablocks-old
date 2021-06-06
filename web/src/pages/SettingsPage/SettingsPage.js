import { Link, routes } from '@redwoodjs/router'
import { OrganizationContext } from 'src/components/Cells/OrganizationProviderCell'
import DashboardHeading from 'src/components/DashboardHeading'
import { organizationTabs } from 'src/lib/dashboardTabs'

const SettingsPage = () => {
  const organization = React.useContext(OrganizationContext)

  const breadcrumbs = [
    { title: organization?.name, to: routes.contacts() },
    { title: 'Organization Settings', to: routes.settings() },
  ]
  return (
    <>
      <DashboardHeading
        title="Organization Settings"
        tabs={organizationTabs}
        breadcrumbs={breadcrumbs}
      />
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
