import {
  applicationAnswers,
  applicationAnswer,
  createApplicationAnswer,
  updateApplicationAnswer,
  deleteApplicationAnswer,
} from './applicationAnswers'

describe('applicationAnswers', () => {
  scenario('returns all applicationAnswers', async (scenario) => {
    const result = await applicationAnswers()

    expect(result.length).toEqual(
      Object.keys(scenario.applicationAnswer).length
    )
  })

  scenario('returns a single applicationAnswer', async (scenario) => {
    const result = await applicationAnswer({
      id: scenario.applicationAnswer.one.id,
    })

    expect(result).toEqual(scenario.applicationAnswer.one)
  })

  scenario('creates a applicationAnswer', async (scenario) => {
    const result = await createApplicationAnswer({
      input: {
        answer: 'String',
        applicationId: 'scenario.applicationAnswer.two.applicationId',
        fieldId: 'scenario.applicationAnswer.two.fieldId',
      },
    })

    expect(result.answer).toEqual('String')
    expect(result.applicationId).toEqual(
      'scenario.applicationAnswer.two.applicationId'
    )

    expect(result.fieldId).toEqual('scenario.applicationAnswer.two.fieldId')
  })

  scenario('updates a applicationAnswer', async (scenario) => {
    const original = await applicationAnswer({
      id: scenario.applicationAnswer.one.id,
    })

    const result = await updateApplicationAnswer({
      id: original.id,
      input: { answer: 'String2' },
    })

    expect(result.answer).toEqual('String2')
  })

  scenario('deletes a applicationAnswer', async (scenario) => {
    const original = await deleteApplicationAnswer({
      id: scenario.applicationAnswer.one.id,
    })

    const result = await applicationAnswer({ id: original.id })

    expect(result).toEqual(null)
  })
})
