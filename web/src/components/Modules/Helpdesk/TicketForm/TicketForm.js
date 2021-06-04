import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const TicketForm = (props) => {
  const onSubmit = (data) => {
    data.status = data?.status ? data.status : 'open'
    props.onSave(data, props?.ticket?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError error={props.error} wrapperClassName="form-error" />

      <div>
        <Label name="title">Title</Label>
        <TextField
          name="title"
          defaultValue={props.ticket?.title}
          validation={{ required: true }}
        />
        <FieldError name="title" className="form-field-error" />
      </div>

      <div>
        <Label name="description">Description</Label>
        <TextAreaField
          name="description"
          defaultValue={props.ticket?.description}
          validation={{ required: false }}
        />
        <FieldError name="description" className="form-field-error" />
      </div>

      <Submit disabled={props.loading} className="btn btn-primary">
        {props.new ? 'Create' : 'Save'}
      </Submit>
    </Form>
  )
}

export default TicketForm
