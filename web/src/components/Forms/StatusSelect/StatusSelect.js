import { Label, SelectField, FieldError } from '@redwoodjs/forms'

const StatusSelect = ({ name, title, required, defaultValue }) => {
  const selectName = name ? name : 'status'
  return (
    <>
      <Label name={selectName} errorClassName="rw-label-error">
        {title ? title : 'Status'}
      </Label>
      <SelectField
        name={selectName}
        defaultValue={defaultValue ? defaultValue : 'open'}
        errorClassName="rw-input-error"
        validation={{ required: required }}
      >
        <option value="open">Open</option>
        <option value="pending">Pending</option>
        <option value="closed">Closed</option>
        <option value="archived">Archived</option>
      </SelectField>
      <FieldError name="status" className="rw-field-error" />
    </>
  )
}

export default StatusSelect
