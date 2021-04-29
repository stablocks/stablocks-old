import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'

describe('contacts', () => {
  scenario('returns all contacts', async (scenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async (scenario) => {
    const result = await createContact({
      input: {
        organizationId: 'scenario.contact.two.organizationId',
        updatedAt: '2021-04-29T23:46:48Z',
      },
    })

    expect(result.organizationId).toEqual('scenario.contact.two.organizationId')
    expect(result.updatedAt).toEqual('2021-04-29T23:46:48Z')
  })

  scenario('updates a contact', async (scenario) => {
    const original = await contact({ id: scenario.contact.one.id })
    const result = await updateContact({
      id: original.id,
      input: { updatedAt: '2021-04-30T23:46:48Z' },
    })

    expect(result.updatedAt).toEqual('2021-04-30T23:46:48Z')
  })

  scenario('deletes a contact', async (scenario) => {
    const original = await deleteContact({ id: scenario.contact.one.id })
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
