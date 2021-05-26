import { render } from '@redwoodjs/testing'

import MessagesPage from './MessagesPage'

describe('MessagesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagesPage />)
    }).not.toThrow()
  })
})
