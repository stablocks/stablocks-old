import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'

const HelpdeskPage = () => {
  return (
    <>
      <DashboardHeading title="Helpdesk" />
      <p>
        Find me in <code>./web/src/pages/HelpdeskPage/HelpdeskPage.js</code>
      </p>
      <p>
        My default route is named <code>helpdesk</code>, link to me with `
        <Link to={routes.helpdesk()}>Helpdesk</Link>`
      </p>
    </>
  )
}

export default HelpdeskPage
