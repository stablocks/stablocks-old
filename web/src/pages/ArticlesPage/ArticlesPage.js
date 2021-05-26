import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { helpdeskTabs } from 'src/lib/dashboardTabs'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'

const ArticlesPage = () => {
  return (
    <>
      <DashboardHeading title="Articles" tabs={helpdeskTabs}>
        <Dialog
          title="New Article"
          button={{ main: true, icon: PlusIcon }}
        ></Dialog>
      </DashboardHeading>
      <p>
        Find me in <code>./web/src/pages/ArticlesPage/ArticlesPage.js</code>
      </p>
      <p>
        My default route is named <code>articles</code>, link to me with `
        <Link to={routes.articles()}>Articles</Link>`
      </p>
    </>
  )
}

export default ArticlesPage
