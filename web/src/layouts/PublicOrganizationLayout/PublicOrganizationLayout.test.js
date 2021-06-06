import { render } from '@redwoodjs/testing'

import PublicOrganizationLayout from './PublicOrganizationLayout'

describe('PublicOrganizationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicOrganizationLayout />)
    }).not.toThrow()
  })
})
