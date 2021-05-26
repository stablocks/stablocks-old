import { render } from '@redwoodjs/testing'

import ArticleCategoryPage from './ArticleCategoryPage'

describe('ArticleCategoryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleCategoryPage />)
    }).not.toThrow()
  })
})
