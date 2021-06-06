import { render } from '@redwoodjs/testing'

import PublicTicketPage from './PublicTicketPage'

describe('PublicTicketPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicTicketPage />)
    }).not.toThrow()
  })
})
