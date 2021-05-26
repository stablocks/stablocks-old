import { useContext } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { OrganizationContext } from 'src/components/Cells/OrganizationProviderCell'
import DashboardHeading from 'src/components/DashboardHeading'
import { organizationTabs } from 'src/lib/dashboardTabs'

const OrganizationPage = () => {
  const organization = useContext(OrganizationContext)
  return (
    <>
      <DashboardHeading title={organization.name} tabs={organizationTabs} />
      <p>
        Find me in{' '}
        <code>./web/src/pages/OrganizationPage/OrganizationPage.js</code>
      </p>
      <p>
        My default route is named <code>organization</code>, link to me with `
        <Link to={routes.organization()}>Organization</Link>`
      </p>
    </>
  )
}

export default OrganizationPage
