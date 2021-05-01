import { render } from '@redwoodjs/testing'

import HelpdeskPage from './HelpdeskPage'

describe('HelpdeskPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelpdeskPage />)
    }).not.toThrow()
  })
})
