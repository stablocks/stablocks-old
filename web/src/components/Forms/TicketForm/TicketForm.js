import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const TicketForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.ticket?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError error={props.error} />

      <Label name="title">Title</Label>
      <TextField
        name="title"
        defaultValue={props.ticket?.title}
        validation={{ required: true }}
      />
      <FieldError name="title" />

      <Label name="description">Description</Label>
      <TextAreaField
        name="description"
        defaultValue={props.ticket?.description}
        validation={{ required: false }}
      />
      <FieldError name="description" />
      <Submit disabled={props.loading} className="rw-button rw-button-blue">
        {props.new ? 'Create' : 'Save'}
      </Submit>
    </Form>
  )
}

export default TicketForm
