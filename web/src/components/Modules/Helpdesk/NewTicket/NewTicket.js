import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import TicketForm from 'src/components/Modules/Helpdesk/TicketForm'

const CREATE_TICKET_MUTATION = gql`
  mutation CreateTicketMutation($input: CreateTicketInput!) {
    createTicket(input: $input) {
      id
    }
  }
`

const NewTicket = () => {
  const [createTicket, { loading, error }] = useMutation(
    CREATE_TICKET_MUTATION,
    {
      onCompleted: () => {
        toast.success('Ticket created')
      },
    }
  )

  const onSave = (input) => {
    createTicket({ variables: { input } })
  }

  return (
    <TicketForm onSave={onSave} loading={loading} error={error} new={true} />
  )
}

export default NewTicket
