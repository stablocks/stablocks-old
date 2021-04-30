import {
  onboardingTasks,
  onboardingTask,
  createOnboardingTask,
  updateOnboardingTask,
  deleteOnboardingTask,
} from './onboardingTasks'

describe('onboardingTasks', () => {
  scenario('returns all onboardingTasks', async (scenario) => {
    const result = await onboardingTasks()

    expect(result.length).toEqual(Object.keys(scenario.onboardingTask).length)
  })

  scenario('returns a single onboardingTask', async (scenario) => {
    const result = await onboardingTask({ id: scenario.onboardingTask.one.id })

    expect(result).toEqual(scenario.onboardingTask.one)
  })

  scenario('creates a onboardingTask', async (scenario) => {
    const result = await createOnboardingTask({
      input: {
        title: 'String',
        status: 'open',
        assignedId: 'scenario.onboardingTask.two.assignedId',
        updatedAt: '2021-04-30T23:31:36Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.status).toEqual('open')
    expect(result.assignedId).toEqual('scenario.onboardingTask.two.assignedId')
    expect(result.updatedAt).toEqual('2021-04-30T23:31:36Z')
  })

  scenario('updates a onboardingTask', async (scenario) => {
    const original = await onboardingTask({
      id: scenario.onboardingTask.one.id,
    })

    const result = await updateOnboardingTask({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a onboardingTask', async (scenario) => {
    const original = await deleteOnboardingTask({
      id: scenario.onboardingTask.one.id,
    })

    const result = await onboardingTask({ id: original.id })

    expect(result).toEqual(null)
  })
})
