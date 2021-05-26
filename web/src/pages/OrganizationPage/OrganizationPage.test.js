import { render } from '@redwoodjs/testing'

import OrganizationPage from './OrganizationPage'

describe('OrganizationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrganizationPage />)
    }).not.toThrow()
  })
})
