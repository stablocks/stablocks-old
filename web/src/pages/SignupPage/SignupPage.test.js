import { render } from '@redwoodjs/testing'

import SignupPage from './SignupPage'

describe('SignupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignupPage />)
    }).not.toThrow()
  })
})
