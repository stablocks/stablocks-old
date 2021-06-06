import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import StatusSelect from 'src/components/Forms/StatusSelect'
import EmployeeSelect from 'src/components/Forms/EmployeeSelect'

const TaskForm = (props) => {
  const onSubmit = (data) => {
    data.projectId = props.task?.projectId
      ? props.task.projectId
      : props.projectId
    props.onSave(data, props?.task?.id)
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
          defaultValue={props.task?.title}
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
          defaultValue={props.task?.description}
          errorClassName="rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="description" className="rw-field-error" />
      </div>
      <div>
        <StatusSelect defaultValue={props.task?.status} />
      </div>
      <div>
        <EmployeeSelect
          name="assignedId"
          title="Assigned To"
          defaultValue={props.task?.assignedId}
        />
      </div>

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="btn btn-primary">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default TaskForm
