import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'

describe('projects', () => {
  scenario('returns all projects', async (scenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async (scenario) => {
    const result = await createProject({
      input: { title: 'String', updatedAt: '2021-04-29T23:48:38Z' },
    })

    expect(result.title).toEqual('String')
    expect(result.updatedAt).toEqual('2021-04-29T23:48:38Z')
  })

  scenario('updates a project', async (scenario) => {
    const original = await project({ id: scenario.project.one.id })
    const result = await updateProject({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a project', async (scenario) => {
    const original = await deleteProject({ id: scenario.project.one.id })
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
