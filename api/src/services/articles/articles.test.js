import {
  articles,
  article,
  createArticle,
  updateArticle,
  deleteArticle,
} from './articles'

describe('articles', () => {
  scenario('returns all articles', async (scenario) => {
    const result = await articles()

    expect(result.length).toEqual(Object.keys(scenario.article).length)
  })

  scenario('returns a single article', async (scenario) => {
    const result = await article({ id: scenario.article.one.id })

    expect(result).toEqual(scenario.article.one)
  })

  scenario('creates a article', async (scenario) => {
    const result = await createArticle({
      input: {
        title: 'String',
        content: 'String',
        status: 'draft',
        updatedAt: '2021-04-29T23:47:11Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.status).toEqual('draft')
    expect(result.updatedAt).toEqual('2021-04-29T23:47:11Z')
  })

  scenario('updates a article', async (scenario) => {
    const original = await article({ id: scenario.article.one.id })
    const result = await updateArticle({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a article', async (scenario) => {
    const original = await deleteArticle({ id: scenario.article.one.id })
    const result = await article({ id: original.id })

    expect(result).toEqual(null)
  })
})
