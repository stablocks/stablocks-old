import Projects from 'src/components/Services/Projects/Projects'
import Loader from 'src/components/Loader'
import Illustration from 'src/components/Illustration'
import EmptyImage from 'src/lib/illustrations/undraw_blank_canvas_3rbb.svg'

export const QUERY = gql`
  query PROJECTS {
    projects {
      id
      title
      description
      tasks {
        id
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

export const Success = ({ projects }) => {
  return <Projects projects={projects} />
}
