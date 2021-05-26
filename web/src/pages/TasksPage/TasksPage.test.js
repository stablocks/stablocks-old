import { render } from '@redwoodjs/testing'

import TasksPage from './TasksPage'

describe('TasksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TasksPage />)
    }).not.toThrow()
  })
})
