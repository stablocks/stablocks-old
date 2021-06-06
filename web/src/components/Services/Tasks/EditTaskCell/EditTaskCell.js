import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TaskForm from 'src/components/Services/Tasks/TaskForm'
import Loader from 'src/components/Loader'

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
const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTaskMutation($id: String!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
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

export const Success = ({ task }) => {
  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task updated')
    },
  })

  const onSave = (input, id) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <TaskForm task={task} onSave={onSave} error={error} loading={loading} />
  )
}
