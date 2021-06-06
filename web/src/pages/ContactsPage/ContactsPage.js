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
        <Dialog title="New Contact" button={{ main: true, icon: PlusIcon }} />
      </DashboardHeading>
    </>
  )
}

export default ContactsPage
