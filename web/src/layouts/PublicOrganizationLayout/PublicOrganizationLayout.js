import { Link, routes, navigate, useLocation } from '@redwoodjs/router'
import PublicOrganizationProviderCell, {
  OrganizationContext,
} from 'src/components/Cells/PublicOrganizationProviderCell'
import { Helmet } from 'react-helmet'
import { SupportIcon, BriefcaseIcon } from '@heroicons/react/outline'

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  const organization = React.useContext(OrganizationContext)
  const recruiting = organization.recruiting
  const helpdesk = organization.helpdesk

  const menu = [
    {
      title: 'Careers',
      to: routes.publicRecruit({ slug: organization.slug }),
      icon: BriefcaseIcon,
      authorized: recruiting,
    },
    {
      title: 'Helpdesk',
      to: routes.publicHelpdesk({ slug: organization.slug }),
      icon: SupportIcon,
      authorized: helpdesk,
    },
  ]

  var numberAuthorized = 0
  let singleRoute

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].authorized) {
      numberAuthorized++
      singleRoute = menu[i].to
    }

    if (numberAuthorized > 1) break
  }

  if (numberAuthorized === 1 && pathname !== singleRoute) {
    navigate(singleRoute)
  } else if (numberAuthorized === 0) {
    navigate(routes.home())
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <Helmet
        titleTemplate={`%s | ${organization.name}`}
        defaultTitle={`${organization.name} | Stablocks`}
      />
      <div className="flex flex-col min-h-screen">
        <header className="relative w-full">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 md:space-x-10">
            <div className="flex">
              <Link
                to={routes.publicOrganization({ slug: organization.slug })}
                className="text-gray-800"
              >
                <span
                  className={
                    organization.image ? 'sr-only' : 'font-bold text-xl'
                  }
                >
                  {organization.name}
                </span>
                {organization.image && (
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={organization.image}
                    alt={organization.name}
                  />
                )}
              </Link>
            </div>
            <div className="flex flex-wrap mt-2 md:mt-0 space-x-10">
              {menu.map(
                (item, i) =>
                  item.authorized && (
                    <Link
                      key={i}
                      to={item.to}
                      className={`${
                        pathname.includes(item.to) ? 'text-indigo-500 ' : ''
                      }flex items-center text-sm font-medium text-gray-500 space-x-1 hover:text-gray-900`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  )
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <footer className="text-center px-4 w-full">
          <p className="text-gray-500 text-sm py-4">
            powered by{' '}
            <Link to={routes.home()} className="font-semibold">
              Stablocks
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}

const PublicOrganizationLayout = ({ slug, children }) => {
  return (
    <div className="bg-gray-100">
      <PublicOrganizationProviderCell slug={slug}>
        <Layout>{children}</Layout>
      </PublicOrganizationProviderCell>
    </div>
  )
}

export default PublicOrganizationLayout
