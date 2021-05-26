import { render } from '@redwoodjs/testing'

import EmployeesPage from './EmployeesPage'

describe('EmployeesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeesPage />)
    }).not.toThrow()
  })
})
