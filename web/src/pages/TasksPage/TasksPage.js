import { routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { projectsTabs } from 'src/lib/dashboardTabs'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'
import NewTask from 'src/components/Services/Tasks/NewTask'
import TasksCell from 'src/components/Services/Tasks/TasksCell'

const TasksPage = () => {
  const breadcrumbs = [
    { title: 'Projects', to: routes.projects() },
    { title: 'My Tasks', to: routes.tasks() },
  ]
  return (
    <>
      <DashboardHeading
        title="My Tasks"
        tabs={projectsTabs}
        breadcrumbs={breadcrumbs}
      />
      <TasksCell />
    </>
  )
}

export default TasksPage
