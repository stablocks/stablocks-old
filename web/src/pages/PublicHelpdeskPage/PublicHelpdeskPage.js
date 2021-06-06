import { Link, routes } from '@redwoodjs/router'
import PublicOrganizationLayout from 'src/layouts/PublicOrganizationLayout'
import { Helmet } from 'react-helmet'

const PublicHelpdeskPage = ({ slug }) => {
  return (
    <PublicOrganizationLayout slug={slug}>
      <Helmet>
        <title>Helpdesk</title>
      </Helmet>
      <h1>PublicHelpdeskPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PublicHelpdeskPage/PublicHelpdeskPage.js</code>
      </p>
      <p>
        My default route is named <code>publicHelpdesk</code>, link to me with `
        <Link to={routes.publicHelpdesk()}>PublicHelpdesk</Link>`
      </p>
    </PublicOrganizationLayout>
  )
}

export default PublicHelpdeskPage
