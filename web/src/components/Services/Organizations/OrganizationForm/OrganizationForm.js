import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const OrganizationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.organization?.id)
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

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.organization?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>
        <TextField
          name="slug"
          defaultValue={props.organization?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="stripeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stripe id
        </Label>
        <TextField
          name="stripeId"
          defaultValue={props.organization?.stripeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="stripeId" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <CheckboxField
          name="email"
          defaultChecked={props.organization?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="communications"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Communications
        </Label>
        <CheckboxField
          name="communications"
          defaultChecked={props.organization?.communications}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="communications" className="rw-field-error" />

        <Label
          name="payroll"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Payroll
        </Label>
        <CheckboxField
          name="payroll"
          defaultChecked={props.organization?.payroll}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="payroll" className="rw-field-error" />

        <Label
          name="hr"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hr
        </Label>
        <CheckboxField
          name="hr"
          defaultChecked={props.organization?.hr}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="hr" className="rw-field-error" />

        <Label
          name="accounting"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Accounting
        </Label>
        <CheckboxField
          name="accounting"
          defaultChecked={props.organization?.accounting}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="accounting" className="rw-field-error" />

        <Label
          name="recruiting"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recruiting
        </Label>
        <CheckboxField
          name="recruiting"
          defaultChecked={props.organization?.recruiting}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="recruiting" className="rw-field-error" />

        <Label
          name="crm"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Crm
        </Label>
        <CheckboxField
          name="crm"
          defaultChecked={props.organization?.crm}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="crm" className="rw-field-error" />

        <Label
          name="marketing"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Marketing
        </Label>
        <CheckboxField
          name="marketing"
          defaultChecked={props.organization?.marketing}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="marketing" className="rw-field-error" />

        <Label
          name="projectManagement"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project management
        </Label>
        <CheckboxField
          name="projectManagement"
          defaultChecked={props.organization?.projectManagement}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="projectManagement" className="rw-field-error" />

        <Label
          name="helpdesk"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Helpdesk
        </Label>
        <CheckboxField
          name="helpdesk"
          defaultChecked={props.organization?.helpdesk}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="helpdesk" className="rw-field-error" />

        <Label
          name="taskTracking"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Task tracking
        </Label>
        <CheckboxField
          name="taskTracking"
          defaultChecked={props.organization?.taskTracking}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="taskTracking" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrganizationForm
