import {
  departments,
  department,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from './departments'

describe('departments', () => {
  scenario('returns all departments', async (scenario) => {
    const result = await departments()

    expect(result.length).toEqual(Object.keys(scenario.department).length)
  })

  scenario('returns a single department', async (scenario) => {
    const result = await department({ id: scenario.department.one.id })

    expect(result).toEqual(scenario.department.one)
  })

  scenario('creates a department', async (scenario) => {
    const result = await createDepartment({
      input: { name: 'String', updatedAt: '2021-04-29T23:44:54Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2021-04-29T23:44:54Z')
  })

  scenario('updates a department', async (scenario) => {
    const original = await department({ id: scenario.department.one.id })
    const result = await updateDepartment({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a department', async (scenario) => {
    const original = await deleteDepartment({ id: scenario.department.one.id })
    const result = await department({ id: original.id })

    expect(result).toEqual(null)
  })
})
