import DashboardHeading from 'src/components/DashboardHeading'
import { projectsTabs } from 'src/lib/dashboardTabs'
import Dialog from 'src/components/HeadlessUI/Dialog'
import { PlusIcon } from '@heroicons/react/outline'
import NewProject from 'src/components/Services/Projects/NewProject'
import ProjectsCell from 'src/components/Services/Projects/ProjectsCell'

const ProjectsPage = () => {
  return (
    <>
      <DashboardHeading title="Projects" tabs={projectsTabs}>
        <Dialog title="New Project" button={{ main: true, icon: PlusIcon }}>
          <NewProject />
        </Dialog>
      </DashboardHeading>
      <ProjectsCell />
    </>
  )
}

export default ProjectsPage
