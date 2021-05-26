import { render } from '@redwoodjs/testing'

import ArticleCategoriesPage from './ArticleCategoriesPage'

describe('ArticleCategoriesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleCategoriesPage />)
    }).not.toThrow()
  })
})
