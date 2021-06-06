import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import DashboardHeading from 'src/components/DashboardHeading'
import Dialog from 'src/components/HeadlessUI/Dialog'
import EditProjectCell from 'src/components/Services/Projects/EditProjectCell'
import EditTaskCell from 'src/components/Services/Tasks/EditTaskCell'
import NewTask from 'src/components/Services/Tasks/NewTask'
import Illustration from 'src/components/Illustration'
import EmptyImage from 'src/lib/illustrations/undraw_blank_canvas_3rbb.svg'
import { PlusIcon } from '@heroicons/react/outline'

import { QUERY } from 'src/components/Services/Projects/ProjectCell'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: String!) {
    deleteTask(id: $id) {
      id
    }
  }
`

const Project = ({ project }) => {
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task deleted')
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteTaskClick = (id, title) => {
    if (confirm('Are you sure you want to delete task ' + title + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  const breadcrumbs = [
    { title: 'Projects', to: routes.projects() },
    { title: project.title, to: routes.project({ id: project.id }) },
  ]

  return (
    <>
      <DashboardHeading
        title={project.title}
        tabTitle={`${project.title} | Projects`}
        description={project.description}
        breadcrumbs={breadcrumbs}
      >
        <Dialog
          title={`Edit Project: ${project.title}`}
          button={{ title: 'Edit Project' }}
        >
          <EditProjectCell id={project.id} />
        </Dialog>
        <Dialog title="Add Task" button={{ main: true, icon: PlusIcon }}>
          <NewTask projectId={project.id} />
        </Dialog>
      </DashboardHeading>
      {project.tasks.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.tasks.map((task) => (
            <li
              key={task.id}
              className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 flex flex-col"
            >
              <div className="w-full flex flex-1 items-start justify-between p-6 space-x-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 font-medium truncate">
                      {task.title}
                    </h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs capitalize font-medium bg-green-100 rounded-full">
                      {task.status}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm">
                    {task.description}
                  </p>
                </div>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <Dialog
                      title={`Edit Task: ${task.title}`}
                      button={{ title: 'Edit' }}
                      buttonClasses="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-indigo-400 font-medium border border-transparent rounded-bl-lg hover:text-indigo-500"
                    >
                      <EditTaskCell id={task.id} />
                    </Dialog>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <button
                      onClick={() => onDeleteTaskClick(task.id, task.title)}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-700 font-medium border border-transparent rounded-br-lg hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Illustration
          svg={<EmptyImage />}
          title="No tasks found for this project, try creating a new one!"
        />
      )}
    </>
  )
}

export default Project
