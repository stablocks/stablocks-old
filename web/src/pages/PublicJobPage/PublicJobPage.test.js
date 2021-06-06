import { render } from '@redwoodjs/testing'

import PublicJobPage from './PublicJobPage'

describe('PublicJobPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicJobPage />)
    }).not.toThrow()
  })
})
