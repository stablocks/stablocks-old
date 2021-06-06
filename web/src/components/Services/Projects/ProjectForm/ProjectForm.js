import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const ProjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.project?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError
        error={props.error}
        wrapperClassName="rw-form-error-wrapper"
        titleClassName="rw-form-error-title"
        listClassName="rw-form-error-list"
      />

      <div>
        <Label name="title" errorClassName="rw-label-error">
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.project?.title}
          errorClassName="rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />
      </div>

      <div>
        <Label name="description" errorClassName="rw-label-error">
          Description
        </Label>
        <TextAreaField
          name="description"
          defaultValue={props.project?.description}
          errorClassName="rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="description" className="rw-field-error" />
      </div>

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="btn btn-primary">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default ProjectForm
