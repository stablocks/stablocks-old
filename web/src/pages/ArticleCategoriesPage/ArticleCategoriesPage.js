import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { helpdeskTabs } from 'src/lib/dashboardTabs'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'

const ArticleCategoriesPage = () => {
  const breadcrumbs = [
    { title: 'Helpdesk', to: routes.helpdesk() },
    { title: 'Article Categories', to: routes.articleCategories() },
  ]
  return (
    <>
      <DashboardHeading
        title="Article Categories"
        tabs={helpdeskTabs}
        breadcrumbs={breadcrumbs}
      >
        <Dialog
          title="New Category"
          button={{ main: true, icon: PlusIcon }}
        ></Dialog>
      </DashboardHeading>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/ArticleCategoriesPage/ArticleCategoriesPage.js
        </code>
      </p>
      <p>
        My default route is named <code>articleCategories</code>, link to me
        with `<Link to={routes.articleCategories()}>ArticleCategories</Link>`
      </p>
    </>
  )
}

export default ArticleCategoriesPage
