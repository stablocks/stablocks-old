import {
  employeePays,
  employeePay,
  createEmployeePay,
  updateEmployeePay,
  deleteEmployeePay,
} from './employeePays'

describe('employeePays', () => {
  scenario('returns all employeePays', async (scenario) => {
    const result = await employeePays()

    expect(result.length).toEqual(Object.keys(scenario.employeePay).length)
  })

  scenario('returns a single employeePay', async (scenario) => {
    const result = await employeePay({ id: scenario.employeePay.one.id })

    expect(result).toEqual(scenario.employeePay.one)
  })

  scenario('creates a employeePay', async (scenario) => {
    const result = await createEmployeePay({
      input: {
        amount: 8773179,
        type: 'salary',
        employeeId: 'scenario.employeePay.two.employeeId',
        updatedAt: '2021-04-29T23:45:15Z',
      },
    })

    expect(result.amount).toEqual(8773179)
    expect(result.type).toEqual('salary')
    expect(result.employeeId).toEqual('scenario.employeePay.two.employeeId')
    expect(result.updatedAt).toEqual('2021-04-29T23:45:15Z')
  })

  scenario('updates a employeePay', async (scenario) => {
    const original = await employeePay({ id: scenario.employeePay.one.id })
    const result = await updateEmployeePay({
      id: original.id,
      input: { amount: 2447349 },
    })

    expect(result.amount).toEqual(2447349)
  })

  scenario('deletes a employeePay', async (scenario) => {
    const original = await deleteEmployeePay({
      id: scenario.employeePay.one.id,
    })

    const result = await employeePay({ id: original.id })

    expect(result).toEqual(null)
  })
})
