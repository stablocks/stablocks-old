import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ProjectForm from 'src/components/Services/Projects/ProjectForm'

import { QUERY } from 'src/components/Services/Projects/ProjectsCell'

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProjectMutation($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
    }
  }
`

const NewProject = () => {
  const [createProject, { loading, error }] = useMutation(
    CREATE_PROJECT_MUTATION,
    {
      onCompleted: (data) => {
        toast.success('Project created')
        if (data?.createProject?.id)
          navigate(routes.project({ id: data.createProject.id }))
      },
    }
  )

  const onSave = (input) => {
    createProject({ variables: { input } })
  }

  return <ProjectForm onSave={onSave} loading={loading} error={error} />
}

export default NewProject
