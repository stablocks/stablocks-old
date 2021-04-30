import {
  applications,
  application,
  createApplication,
  updateApplication,
  deleteApplication,
} from './applications'

describe('applications', () => {
  scenario('returns all applications', async (scenario) => {
    const result = await applications()

    expect(result.length).toEqual(Object.keys(scenario.application).length)
  })

  scenario('returns a single application', async (scenario) => {
    const result = await application({ id: scenario.application.one.id })

    expect(result).toEqual(scenario.application.one)
  })

  scenario('creates a application', async (scenario) => {
    const result = await createApplication({
      input: {
        jobId: 'scenario.application.two.jobId',
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        status: 'submitted',
        updatedAt: '2021-04-30T23:35:04Z',
      },
    })

    expect(result.jobId).toEqual('scenario.application.two.jobId')
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.status).toEqual('submitted')
    expect(result.updatedAt).toEqual('2021-04-30T23:35:04Z')
  })

  scenario('updates a application', async (scenario) => {
    const original = await application({ id: scenario.application.one.id })
    const result = await updateApplication({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a application', async (scenario) => {
    const original = await deleteApplication({
      id: scenario.application.one.id,
    })

    const result = await application({ id: original.id })

    expect(result).toEqual(null)
  })
})
