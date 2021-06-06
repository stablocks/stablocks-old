import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { contactsTabs } from 'src/lib/dashboardTabs'
import { SearchContext } from 'src/layouts/AdminLayout'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'

const CompaniesPage = () => {
  const { setSearchTitle, setSearchType } = React.useContext(SearchContext)

  React.useEffect(() => {
    setSearchTitle('companies')
    setSearchType('companies')
  })

  const breadcrumbs = [
    { title: 'Contacts', to: routes.contacts() },
    { title: 'Companies', to: routes.companies() },
  ]
  return (
    <>
      <DashboardHeading
        title="Companies"
        tabs={contactsTabs}
        breadcrumbs={breadcrumbs}
      >
        <Dialog
          title="New Company"
          button={{ main: true, icon: PlusIcon }}
        ></Dialog>
      </DashboardHeading>
      <p>
        Find me in <code>./web/src/pages/CompaniesPage/CompaniesPage.js</code>
      </p>
      <p>
        My default route is named <code>companies</code>, link to me with `
        <Link to={routes.companies()}>Companies</Link>`
      </p>
    </>
  )
}

export default CompaniesPage
