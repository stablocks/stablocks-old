import { Link, routes } from '@redwoodjs/router'
import PublicOrganizationLayout from 'src/layouts/PublicOrganizationLayout'

const PublicOrganizationPage = ({ slug }) => {
  return (
    <PublicOrganizationLayout slug={slug}>
      <h1>PublicOrganizationPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/PublicOrganizationPage/PublicOrganizationPage.js
        </code>
      </p>
      <p>
        My default route is named <code>publicOrganization</code>, link to me
        with `<Link to={routes.publicOrganization()}>PublicOrganization</Link>`
      </p>
    </PublicOrganizationLayout>
  )
}

export default PublicOrganizationPage
