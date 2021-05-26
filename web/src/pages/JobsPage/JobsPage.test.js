import { render } from '@redwoodjs/testing'

import JobsPage from './JobsPage'

describe('JobsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobsPage />)
    }).not.toThrow()
  })
})
