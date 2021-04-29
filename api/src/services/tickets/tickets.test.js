import {
  tickets,
  ticket,
  createTicket,
  updateTicket,
  deleteTicket,
} from './tickets'

describe('tickets', () => {
  scenario('returns all tickets', async (scenario) => {
    const result = await tickets()

    expect(result.length).toEqual(Object.keys(scenario.ticket).length)
  })

  scenario('returns a single ticket', async (scenario) => {
    const result = await ticket({ id: scenario.ticket.one.id })

    expect(result).toEqual(scenario.ticket.one)
  })

  scenario('creates a ticket', async (scenario) => {
    const result = await createTicket({
      input: {
        title: 'String',
        status: 'open',
        assignedId: 'scenario.ticket.two.assignedId',
        updatedAt: '2021-04-29T23:47:40Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.status).toEqual('open')
    expect(result.assignedId).toEqual('scenario.ticket.two.assignedId')
    expect(result.updatedAt).toEqual('2021-04-29T23:47:40Z')
  })

  scenario('updates a ticket', async (scenario) => {
    const original = await ticket({ id: scenario.ticket.one.id })
    const result = await updateTicket({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a ticket', async (scenario) => {
    const original = await deleteTicket({ id: scenario.ticket.one.id })
    const result = await ticket({ id: original.id })

    expect(result).toEqual(null)
  })
})
