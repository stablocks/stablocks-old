import {
  ticketMessages,
  ticketMessage,
  createTicketMessage,
  updateTicketMessage,
  deleteTicketMessage,
} from './ticketMessages'

describe('ticketMessages', () => {
  scenario('returns all ticketMessages', async (scenario) => {
    const result = await ticketMessages()

    expect(result.length).toEqual(Object.keys(scenario.ticketMessage).length)
  })

  scenario('returns a single ticketMessage', async (scenario) => {
    const result = await ticketMessage({ id: scenario.ticketMessage.one.id })

    expect(result).toEqual(scenario.ticketMessage.one)
  })

  scenario('creates a ticketMessage', async (scenario) => {
    const result = await createTicketMessage({
      input: { message: 'String', taskId: 'scenario.ticketMessage.two.taskId' },
    })

    expect(result.message).toEqual('String')
    expect(result.taskId).toEqual('scenario.ticketMessage.two.taskId')
  })

  scenario('updates a ticketMessage', async (scenario) => {
    const original = await ticketMessage({ id: scenario.ticketMessage.one.id })
    const result = await updateTicketMessage({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a ticketMessage', async (scenario) => {
    const original = await deleteTicketMessage({
      id: scenario.ticketMessage.one.id,
    })

    const result = await ticketMessage({ id: original.id })

    expect(result).toEqual(null)
  })
})
