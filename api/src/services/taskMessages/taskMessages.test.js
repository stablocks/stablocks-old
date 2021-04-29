import {
  taskMessages,
  taskMessage,
  createTaskMessage,
  updateTaskMessage,
  deleteTaskMessage,
} from './taskMessages'

describe('taskMessages', () => {
  scenario('returns all taskMessages', async (scenario) => {
    const result = await taskMessages()

    expect(result.length).toEqual(Object.keys(scenario.taskMessage).length)
  })

  scenario('returns a single taskMessage', async (scenario) => {
    const result = await taskMessage({ id: scenario.taskMessage.one.id })

    expect(result).toEqual(scenario.taskMessage.one)
  })

  scenario('creates a taskMessage', async (scenario) => {
    const result = await createTaskMessage({
      input: { message: 'String', taskId: 'scenario.taskMessage.two.taskId' },
    })

    expect(result.message).toEqual('String')
    expect(result.taskId).toEqual('scenario.taskMessage.two.taskId')
  })

  scenario('updates a taskMessage', async (scenario) => {
    const original = await taskMessage({ id: scenario.taskMessage.one.id })
    const result = await updateTaskMessage({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a taskMessage', async (scenario) => {
    const original = await deleteTaskMessage({
      id: scenario.taskMessage.one.id,
    })

    const result = await taskMessage({ id: original.id })

    expect(result).toEqual(null)
  })
})
