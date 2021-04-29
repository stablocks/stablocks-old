import {
  fieldOrders,
  fieldOrder,
  createFieldOrder,
  updateFieldOrder,
  deleteFieldOrder,
} from './fieldOrders'

describe('fieldOrders', () => {
  scenario('returns all fieldOrders', async (scenario) => {
    const result = await fieldOrders()

    expect(result.length).toEqual(Object.keys(scenario.fieldOrder).length)
  })

  scenario('returns a single fieldOrder', async (scenario) => {
    const result = await fieldOrder({ id: scenario.fieldOrder.one.id })

    expect(result).toEqual(scenario.fieldOrder.one)
  })

  scenario('creates a fieldOrder', async (scenario) => {
    const result = await createFieldOrder({
      input: {
        order: 7378076,
        jobId: 'scenario.fieldOrder.two.jobId',
        fieldId: 'scenario.fieldOrder.two.fieldId',
      },
    })

    expect(result.order).toEqual(7378076)
    expect(result.jobId).toEqual('scenario.fieldOrder.two.jobId')
    expect(result.fieldId).toEqual('scenario.fieldOrder.two.fieldId')
  })

  scenario('updates a fieldOrder', async (scenario) => {
    const original = await fieldOrder({ id: scenario.fieldOrder.one.id })
    const result = await updateFieldOrder({
      id: original.id,
      input: { order: 7513953 },
    })

    expect(result.order).toEqual(7513953)
  })

  scenario('deletes a fieldOrder', async (scenario) => {
    const original = await deleteFieldOrder({ id: scenario.fieldOrder.one.id })
    const result = await fieldOrder({ id: original.id })

    expect(result).toEqual(null)
  })
})
