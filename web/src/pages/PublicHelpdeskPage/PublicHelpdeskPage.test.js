import { render } from '@redwoodjs/testing'

import PublicHelpdeskPage from './PublicHelpdeskPage'

describe('PublicHelpdeskPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicHelpdeskPage />)
    }).not.toThrow()
  })
})
