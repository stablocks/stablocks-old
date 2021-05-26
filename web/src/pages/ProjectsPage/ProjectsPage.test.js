import { render } from '@redwoodjs/testing'

import ProjectsPage from './ProjectsPage'

describe('ProjectsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectsPage />)
    }).not.toThrow()
  })
})
