import Tasks from 'src/components/Services/Tasks/Tasks'
import Loader from 'src/components/Loader'
import Illustration from 'src/components/Illustration'
import EmptyImage from 'src/lib/illustrations/undraw_blank_canvas_3rbb.svg'

export const QUERY = gql`
  query TASKS {
    tasks {
      id
      title
      description
      status
      assignedId
      projectId
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
      title="No tasks found, try creating a new one!"
    />
  )
}

export const Success = ({ tasks }) => {
  return <Tasks tasks={tasks} />
}
