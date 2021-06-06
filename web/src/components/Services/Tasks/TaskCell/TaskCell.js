import Task from 'src/components/Services/Tasks/Task'

export const QUERY = gql`
  query FIND_TASK_BY_ID($id: String!) {
    task: task(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Task not found</div>

export const Success = ({ task }) => {
  return <Task task={task} />
}
