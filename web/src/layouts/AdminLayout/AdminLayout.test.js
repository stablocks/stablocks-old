import { render } from '@redwoodjs/testing'

import AdminLayout from './AdminLayout'

describe('AdminLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminLayout />)
    }).not.toThrow()
  })
})
