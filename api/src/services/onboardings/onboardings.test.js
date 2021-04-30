import {
  onboardings,
  onboarding,
  createOnboarding,
  updateOnboarding,
  deleteOnboarding,
} from './onboardings'

describe('onboardings', () => {
  scenario('returns all onboardings', async (scenario) => {
    const result = await onboardings()

    expect(result.length).toEqual(Object.keys(scenario.onboarding).length)
  })

  scenario('returns a single onboarding', async (scenario) => {
    const result = await onboarding({ id: scenario.onboarding.one.id })

    expect(result).toEqual(scenario.onboarding.one)
  })

  scenario('creates a onboarding', async (scenario) => {
    const result = await createOnboarding({
      input: {
        employeeId: 'scenario.onboarding.two.employeeId',
        updatedAt: '2021-04-30T23:31:23Z',
      },
    })

    expect(result.employeeId).toEqual('scenario.onboarding.two.employeeId')
    expect(result.updatedAt).toEqual('2021-04-30T23:31:23Z')
  })

  scenario('updates a onboarding', async (scenario) => {
    const original = await onboarding({ id: scenario.onboarding.one.id })
    const result = await updateOnboarding({
      id: original.id,
      input: { updatedAt: '2021-05-01T23:31:23Z' },
    })

    expect(result.updatedAt).toEqual('2021-05-01T23:31:23Z')
  })

  scenario('deletes a onboarding', async (scenario) => {
    const original = await deleteOnboarding({ id: scenario.onboarding.one.id })
    const result = await onboarding({ id: original.id })

    expect(result).toEqual(null)
  })
})
