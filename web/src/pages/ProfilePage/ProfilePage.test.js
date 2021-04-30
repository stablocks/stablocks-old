import { render } from '@redwoodjs/testing'

import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfilePage />)
    }).not.toThrow()
  })
})
