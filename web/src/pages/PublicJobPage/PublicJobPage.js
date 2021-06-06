import { Link, routes } from '@redwoodjs/router'
import PublicOrganizationLayout from 'src/layouts/PublicOrganizationLayout'
import { Helmet } from 'react-helmet'

const PublicJobPage = ({ slug }) => {
  return (
    <PublicOrganizationLayout slug={slug}>
      <Helmet>
        <title>Position | Careers</title>
      </Helmet>
      <h1>PublicJobPage</h1>
      <p>
        Find me in <code>./web/src/pages/PublicJobPage/PublicJobPage.js</code>
      </p>
      <p>
        My default route is named <code>publicJob</code>, link to me with `
        <Link to={routes.publicJob()}>PublicJob</Link>`
      </p>
    </PublicOrganizationLayout>
  )
}

export default PublicJobPage
