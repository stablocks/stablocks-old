import { tasks, task, createTask, updateTask, deleteTask } from './tasks'

describe('tasks', () => {
  scenario('returns all tasks', async (scenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })

  scenario('returns a single task', async (scenario) => {
    const result = await task({ id: scenario.task.one.id })

    expect(result).toEqual(scenario.task.one)
  })

  scenario('creates a task', async (scenario) => {
    const result = await createTask({
      input: {
        title: 'String',
        status: 'open',
        assignedId: 'scenario.task.two.assignedId',
        projectId: 'scenario.task.two.projectId',
        updatedAt: '2021-04-30T23:37:28Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.status).toEqual('open')
    expect(result.assignedId).toEqual('scenario.task.two.assignedId')
    expect(result.projectId).toEqual('scenario.task.two.projectId')
    expect(result.updatedAt).toEqual('2021-04-30T23:37:28Z')
  })

  scenario('updates a task', async (scenario) => {
    const original = await task({ id: scenario.task.one.id })
    const result = await updateTask({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a task', async (scenario) => {
    const original = await deleteTask({ id: scenario.task.one.id })
    const result = await task({ id: original.id })

    expect(result).toEqual(null)
  })
})
