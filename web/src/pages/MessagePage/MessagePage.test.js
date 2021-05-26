import { render } from '@redwoodjs/testing'

import MessagePage from './MessagePage'

describe('MessagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagePage />)
    }).not.toThrow()
  })
})
