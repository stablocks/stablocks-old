import { render } from '@redwoodjs/testing'

import UserSettingsPage from './UserSettingsPage'

describe('UserSettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserSettingsPage />)
    }).not.toThrow()
  })
})
