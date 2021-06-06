import PublicOrganizationLayout from 'src/layouts/PublicOrganizationLayout'
import OrganizationPageElements from 'src/components/Public/OrganizationPageElements'

const PublicOrganizationPage = ({ slug }) => {
  return (
    <PublicOrganizationLayout slug={slug}>
      <OrganizationPageElements slug={slug} />
    </PublicOrganizationLayout>
  )
}

export default PublicOrganizationPage
