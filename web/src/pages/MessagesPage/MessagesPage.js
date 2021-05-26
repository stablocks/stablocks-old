import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { helpdeskTabs } from 'src/lib/dashboardTabs'

const MessagesPage = () => {
  return (
    <>
      <DashboardHeading title="Messages" tabs={helpdeskTabs} />
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
