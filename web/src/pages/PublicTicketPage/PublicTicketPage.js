import { Link, routes } from '@redwoodjs/router'
import PublicOrganizationLayout from 'src/layouts/PublicOrganizationLayout'
import { Helmet } from 'react-helmet'

const PublicTicketPage = ({ slug }) => {
  return (
    <PublicOrganizationLayout slug={slug}>
      <Helmet>
        <title>Ticket | Helpdesk</title>
      </Helmet>
      <h1>PublicTicketPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PublicTicketPage/PublicTicketPage.js</code>
      </p>
      <p>
        My default route is named <code>publicTicket</code>, link to me with `
        <Link to={routes.publicTicket()}>PublicTicket</Link>`
      </p>
    </PublicOrganizationLayout>
  )
}

export default PublicTicketPage
