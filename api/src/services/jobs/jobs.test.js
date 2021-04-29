import { jobs, job, createJob, updateJob, deleteJob } from './jobs'

describe('jobs', () => {
  scenario('returns all jobs', async (scenario) => {
    const result = await jobs()

    expect(result.length).toEqual(Object.keys(scenario.job).length)
  })

  scenario('returns a single job', async (scenario) => {
    const result = await job({ id: scenario.job.one.id })

    expect(result).toEqual(scenario.job.one)
  })

  scenario('creates a job', async (scenario) => {
    const result = await createJob({
      input: {
        title: 'String',
        description: 'String',
        organizationId: 'scenario.job.two.organizationId',
        updatedAt: '2021-04-29T23:45:25Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.organizationId).toEqual('scenario.job.two.organizationId')
    expect(result.updatedAt).toEqual('2021-04-29T23:45:25Z')
  })

  scenario('updates a job', async (scenario) => {
    const original = await job({ id: scenario.job.one.id })
    const result = await updateJob({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a job', async (scenario) => {
    const original = await deleteJob({ id: scenario.job.one.id })
    const result = await job({ id: original.id })

    expect(result).toEqual(null)
  })
})
