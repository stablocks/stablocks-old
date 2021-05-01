import { render } from '@redwoodjs/testing'

import TicketsPage from './TicketsPage'

describe('TicketsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TicketsPage />)
    }).not.toThrow()
  })
})
