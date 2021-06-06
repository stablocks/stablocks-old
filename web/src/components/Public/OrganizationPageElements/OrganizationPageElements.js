import { Link, routes } from '@redwoodjs/router'
import { OrganizationContext } from 'src/components/Cells/PublicOrganizationProviderCell'
import OrganizationCTA from 'src/components/OrganizationCTA'
import { SupportIcon, BriefcaseIcon } from '@heroicons/react/outline'

const OrganizationPageElements = ({ slug }) => {
  const organization = React.useContext(OrganizationContext)
  const recruiting = organization.recruiting
  const helpdesk = organization.helpdesk

  return (
    <div className="mb-12 flex-1 flex flex-col items-center justify-center md:flex-row flex-wrap -mx-6 -mt-6">
      {recruiting && (
        <OrganizationCTA
          title="Join our team"
          icon={BriefcaseIcon}
          description="Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec."
          button="Explore open positions"
          to={routes.publicRecruit({ slug: slug })}
        />
      )}
      {helpdesk && (
        <OrganizationCTA
          title="Contact support"
          icon={SupportIcon}
          description="Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec."
          button="Visit our helpdesk"
          to={routes.publicHelpdesk({ slug: slug })}
        />
      )}
    </div>
  )
}

export default OrganizationPageElements
