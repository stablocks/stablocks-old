import { render } from '@redwoodjs/testing'

import PublicRecruitPage from './PublicRecruitPage'

describe('PublicRecruitPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicRecruitPage />)
    }).not.toThrow()
  })
})
