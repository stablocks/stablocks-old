import { render } from '@redwoodjs/testing'

import ArticlesPage from './ArticlesPage'

describe('ArticlesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticlesPage />)
    }).not.toThrow()
  })
})
