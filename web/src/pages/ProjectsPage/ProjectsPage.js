import { Link, routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import { projectsTabs } from 'src/lib/dashboardTabs'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'

const ProjectsPage = () => {
  return (
    <>
      <DashboardHeading title="Projects" tabs={projectsTabs}>
        <Dialog
          title="New Project"
          button={{ main: true, icon: PlusIcon }}
        ></Dialog>
      </DashboardHeading>
      <p>
        Find me in <code>./web/src/pages/ProjectsPage/ProjectsPage.js</code>
      </p>
      <p>
        My default route is named <code>projects</code>, link to me with `
        <Link to={routes.projects()}>Projects</Link>`
      </p>
    </>
  )
}

export default ProjectsPage
