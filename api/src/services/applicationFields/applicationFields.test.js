import {
  applicationFields,
  applicationField,
  createApplicationField,
  updateApplicationField,
  deleteApplicationField,
} from './applicationFields'

describe('applicationFields', () => {
  scenario('returns all applicationFields', async (scenario) => {
    const result = await applicationFields()

    expect(result.length).toEqual(Object.keys(scenario.applicationField).length)
  })

  scenario('returns a single applicationField', async (scenario) => {
    const result = await applicationField({
      id: scenario.applicationField.one.id,
    })

    expect(result).toEqual(scenario.applicationField.one)
  })

  scenario('creates a applicationField', async (scenario) => {
    const result = await createApplicationField({
      input: {
        title: 'String',
        type: 'input',
        organizationId: 'scenario.applicationField.two.organizationId',
        updatedAt: '2021-04-29T23:46:35Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.type).toEqual('input')
    expect(result.organizationId).toEqual(
      'scenario.applicationField.two.organizationId'
    )

    expect(result.updatedAt).toEqual('2021-04-29T23:46:35Z')
  })

  scenario('updates a applicationField', async (scenario) => {
    const original = await applicationField({
      id: scenario.applicationField.one.id,
    })

    const result = await updateApplicationField({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a applicationField', async (scenario) => {
    const original = await deleteApplicationField({
      id: scenario.applicationField.one.id,
    })

    const result = await applicationField({ id: original.id })

    expect(result).toEqual(null)
  })
})
