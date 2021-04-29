import {
  organizations,
  organization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} from './organizations'

describe('organizations', () => {
  scenario('returns all organizations', async (scenario) => {
    const result = await organizations()

    expect(result.length).toEqual(Object.keys(scenario.organization).length)
  })

  scenario('returns a single organization', async (scenario) => {
    const result = await organization({ id: scenario.organization.one.id })

    expect(result).toEqual(scenario.organization.one)
  })

  scenario('creates a organization', async (scenario) => {
    const result = await createOrganization({
      input: {
        name: 'String',
        slug: 'String3337201',
        stripeId: 'String',
        updatedAt: '2021-04-29T23:44:30Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.slug).toEqual('String3337201')
    expect(result.stripeId).toEqual('String')
    expect(result.updatedAt).toEqual('2021-04-29T23:44:30Z')
  })

  scenario('updates a organization', async (scenario) => {
    const original = await organization({ id: scenario.organization.one.id })
    const result = await updateOrganization({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a organization', async (scenario) => {
    const original = await deleteOrganization({
      id: scenario.organization.one.id,
    })

    const result = await organization({ id: original.id })

    expect(result).toEqual(null)
  })
})
