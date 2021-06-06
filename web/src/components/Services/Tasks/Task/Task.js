import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: String!) {
    deleteTask(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const Task = ({ task }) => {
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task deleted')
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete task ' + id + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Task {task.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{task.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{task.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{task.description}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{task.status}</td>
            </tr>
            <tr>
              <th>Assigned id</th>
              <td>{task.assignedId}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{task.projectId}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(task.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(task.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(task.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Task
