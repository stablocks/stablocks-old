import { Link, routes } from '@redwoodjs/router'
import PublicOrganizationLayout from 'src/layouts/PublicOrganizationLayout'
import { Helmet } from 'react-helmet'

const PublicRecruitPage = ({ slug }) => {
  return (
    <PublicOrganizationLayout slug={slug}>
      <Helmet>
        <title>Careers</title>
      </Helmet>
      <h1>PublicRecruitPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PublicRecruitPage/PublicRecruitPage.js</code>
      </p>
      <p>
        My default route is named <code>publicRecruit</code>, link to me with `
        <Link to={routes.publicRecruit()}>PublicRecruit</Link>`
      </p>
    </PublicOrganizationLayout>
  )
}

export default PublicRecruitPage
