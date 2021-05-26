import { render } from '@redwoodjs/testing'

import RecruitPage from './RecruitPage'

describe('RecruitPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecruitPage />)
    }).not.toThrow()
  })
})
