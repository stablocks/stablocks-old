import {
  employees,
  employee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from './employees'

describe('employees', () => {
  scenario('returns all employees', async (scenario) => {
    const result = await employees()

    expect(result.length).toEqual(Object.keys(scenario.employee).length)
  })

  scenario('returns a single employee', async (scenario) => {
    const result = await employee({ id: scenario.employee.one.id })

    expect(result).toEqual(scenario.employee.one)
  })

  scenario('creates a employee', async (scenario) => {
    const result = await createEmployee({
      input: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        organizationId: 'scenario.employee.two.organizationId',
        organizationRoles: 'admin',
        updatedAt: '2021-04-29T23:44:45Z',
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.organizationId).toEqual(
      'scenario.employee.two.organizationId'
    )

    expect(result.organizationRoles).toEqual('admin')
    expect(result.updatedAt).toEqual('2021-04-29T23:44:45Z')
  })

  scenario('updates a employee', async (scenario) => {
    const original = await employee({ id: scenario.employee.one.id })
    const result = await updateEmployee({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a employee', async (scenario) => {
    const original = await deleteEmployee({ id: scenario.employee.one.id })
    const result = await employee({ id: original.id })

    expect(result).toEqual(null)
  })
})
