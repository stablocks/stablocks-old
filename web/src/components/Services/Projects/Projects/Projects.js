import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import { truncate, timeTag } from 'src/lib/utils'
import { Table, TableHead, TableRow, TableData } from 'src/components/Table'

import { QUERY } from 'src/components/Services/Projects/ProjectsCell'

const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProjectMutation($id: String!) {
    deleteProject(id: $id) {
      id
    }
  }
`

const ProjectsList = ({ projects }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Project deleted')
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id, title) => {
    if (confirm('Are you sure you want to delete project ' + title + '?')) {
      deleteProject({ variables: { id } })
    }
  }

  const tableHeads = ['Title', 'Description']

  return (
    <Table headItems={tableHeads} lastCol="Options">
      {projects.map((project) => (
        <TableRow key={project.id}>
          <TableData bold={true}>
            <Link
              to={routes.project({ id: project.id })}
              title={'View project ' + project.title}
            >
              {truncate(project.title)}
            </Link>
          </TableData>
          <TableData>{truncate(project.description)}</TableData>
          <TableData bold={true} last={true}>
            <nav className="flex items-center gap-2">
              <Link
                to={routes.project({ id: project.id })}
                title={'View project ' + project.title}
              >
                View
              </Link>
              <button
                title={'Delete project ' + project.title}
                onClick={() => onDeleteClick(project.id, project.title)}
                className="text-red-500"
              >
                Delete
              </button>
            </nav>
          </TableData>
        </TableRow>
      ))}
    </Table>
  )
}

export default ProjectsList
