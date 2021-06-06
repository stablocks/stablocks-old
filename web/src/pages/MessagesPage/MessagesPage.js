import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { helpdeskTabs } from 'src/lib/dashboardTabs'

const MessagesPage = () => {
  const breadcrumbs = [
    { title: 'Helpdesk', to: routes.helpdesk() },
    { title: 'Messages', to: routes.messages() },
  ]
  return (
    <>
      <DashboardHeading
        title="Messages"
        tabs={helpdeskTabs}
        breadcrumbs={breadcrumbs}
      />
      <p>
        Find me in <code>./web/src/pages/MessagesPage/MessagesPage.js</code>
      </p>
      <p>
        My default route is named <code>messages</code>, link to me with `
        <Link to={routes.messages()}>Messages</Link>`
      </p>
    </>
  )
}

export default MessagesPage
