import {
  companies,
  company,
  createCompany,
  updateCompany,
  deleteCompany,
} from './companies'

describe('companies', () => {
  scenario('returns all companies', async (scenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })

  scenario('returns a single company', async (scenario) => {
    const result = await company({ id: scenario.company.one.id })

    expect(result).toEqual(scenario.company.one)
  })

  scenario('creates a company', async (scenario) => {
    const result = await createCompany({
      input: { name: 'String', updatedAt: '2021-04-29T23:46:58Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2021-04-29T23:46:58Z')
  })

  scenario('updates a company', async (scenario) => {
    const original = await company({ id: scenario.company.one.id })
    const result = await updateCompany({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a company', async (scenario) => {
    const original = await deleteCompany({ id: scenario.company.one.id })
    const result = await company({ id: original.id })

    expect(result).toEqual(null)
  })
})
