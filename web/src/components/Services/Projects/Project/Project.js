import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import { timeTag } from 'src/lib/utils'

import { QUERY } from 'src/components/Services/Projects/ProjectsCell'

const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProjectMutation($id: String!) {
    deleteProject(id: $id) {
      id
    }
  }
`

const Project = ({ project }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Project deleted')
      navigate(routes.projects())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete project ' + id + '?')) {
      deleteProject({ variables: { id } })
    }
  }

  return (
    <>
      <h1>{project.title}</h1>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Project {project.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{project.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{project.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{project.description}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(project.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(project.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to="#" className="rw-button rw-button-blue">
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(project.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Project
