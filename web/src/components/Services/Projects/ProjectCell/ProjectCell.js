import Project from 'src/components/Services/Projects/Project'
import Loader from 'src/components/Loader'
import Illustration from 'src/components/Illustration'
import EmptyImage from 'src/lib/illustrations/undraw_blank_canvas_3rbb.svg'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: String!) {
    project: project(id: $id) {
      id
      title
      description
      tasks {
        id
        title
        description
        status
        assignedId
      }
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => {
  return (
    <Illustration
      svg={<EmptyImage />}
      title="No projects found, try creating a new one!"
    />
  )
}

export const Success = ({ project }) => {
  return <Project project={project} />
}
