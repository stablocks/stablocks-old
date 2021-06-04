import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ProjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.project?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <div>
          <Label
            name="title"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Title
          </Label>
          <TextField
            name="title"
            defaultValue={props.project?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="title" className="rw-field-error" />
        </div>

        <div>
          <Label
            name="description"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Description
          </Label>
          <TextField
            name="description"
            defaultValue={props.project?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="description" className="rw-field-error" />
        </div>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="btn btn-primary">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectForm
