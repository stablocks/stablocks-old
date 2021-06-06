import { useContext } from 'react'
import { Label, SelectField, FieldError } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { OrganizationContext } from 'src/components/Cells/OrganizationProviderCell'

const EmployeeSelect = ({ name, title, required, defaultValue }) => {
  const organization = useContext(OrganizationContext)
  const { currentUser } = useAuth()
  const selectName = name ? name : 'employee'
  return (
    <>
      <Label name={selectName} errorClassName="rw-label-error">
        {title ? title : 'Employee'}
      </Label>
      <SelectField
        name={selectName}
        defaultValue={
          defaultValue ? defaultValue : !required ? '' : currentUser.id
        }
        errorClassName="rw-input-error"
        validation={{ required: required }}
      >
        {!required && <option value="">-- none --</option>}
        {organization.employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.firstName} {employee.lastName}
          </option>
        ))}
      </SelectField>
      <FieldError name="status" className="rw-field-error" />
    </>
  )
}

export default EmployeeSelect
