import { render } from '@redwoodjs/testing'

import PublicOrganizationPage from './PublicOrganizationPage'

describe('PublicOrganizationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicOrganizationPage />)
    }).not.toThrow()
  })
})
