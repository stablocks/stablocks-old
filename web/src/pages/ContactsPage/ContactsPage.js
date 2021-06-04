import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { contactsTabs } from 'src/lib/dashboardTabs'
import { SearchContext } from 'src/layouts/AdminLayout'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'

const ContactsPage = () => {
  const { setSearchTitle, setSearchType } = React.useContext(SearchContext)

  React.useEffect(() => {
    setSearchTitle('contacts')
    setSearchType('contacts')
  })
  return (
    <>
      <DashboardHeading title="Contacts" tabs={contactsTabs}>
        <Dialog
          title="New Contact"
          button={{ main: true, icon: PlusIcon }}
        ></Dialog>
      </DashboardHeading>
      <p>
        Find me in <code>./web/src/pages/ContactsPage/ContactsPage.js</code>
      </p>
      <p>
        My default route is named <code>contacts</code>, link to me with `
        <Link to={routes.contacts()}>Contacts</Link>`
      </p>
    </>
  )
}

export default ContactsPage
