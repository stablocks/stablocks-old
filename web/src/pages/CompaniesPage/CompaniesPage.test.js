import { render } from '@redwoodjs/testing'

import CompaniesPage from './CompaniesPage'

describe('CompaniesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompaniesPage />)
    }).not.toThrow()
  })
})
