import { render } from '@redwoodjs/testing'

import ContactsPage from './ContactsPage'

describe('ContactsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactsPage />)
    }).not.toThrow()
  })
})
