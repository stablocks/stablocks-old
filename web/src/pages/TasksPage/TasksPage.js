import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { projectsTabs } from 'src/lib/dashboardTabs'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'

const TasksPage = () => {
  return (
    <>
      <DashboardHeading title="Tasks" tabs={projectsTabs}>
        <Dialog
          title="New Task"
          button={{ main: true, icon: PlusIcon }}
        ></Dialog>
      </DashboardHeading>
      <p>
        Find me in <code>./web/src/pages/TasksPage/TasksPage.js</code>
      </p>
      <p>
        My default route is named <code>tasks</code>, link to me with `
        <Link to={routes.tasks()}>Tasks</Link>`
      </p>
    </>
  )
}

export default TasksPage
