import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ProjectForm from 'src/components/Services/Projects/ProjectForm'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: String!) {
    project: project(id: $id) {
      id
      title
      description
      updatedAt
      createdAt
    }
  }
`
const UPDATE_PROJECT_MUTATION = gql`
  mutation UpdateProjectMutation($id: String!, $input: UpdateProjectInput!) {
    updateProject(id: $id, input: $input) {
      id
      title
      description
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ project }) => {
  const [updateProject, { loading, error }] = useMutation(
    UPDATE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Project updated')
      },
    }
  )

  const onSave = (input, id) => {
    updateProject({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Project {project.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProjectForm
          project={project}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
