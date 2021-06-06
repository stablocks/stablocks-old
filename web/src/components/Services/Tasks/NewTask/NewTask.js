import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import TaskForm from 'src/components/Services/Tasks/TaskForm'

import { QUERY } from 'src/components/Services/Projects/ProjectCell'

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`

const NewTask = ({ projectId }) => {
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task created')
    },
    // refetchQueries: [{ query: QUERY }],
    // awaitRefetchQueries: true,
  })

  const onSave = (input) => {
    createTask({ variables: { input } })
  }

  return (
    <TaskForm
      projectId={projectId}
      onSave={onSave}
      loading={loading}
      error={error}
    />
  )
}

export default NewTask
