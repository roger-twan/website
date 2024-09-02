import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from '@/pages/projects/index.page.tsx'

describe('Page Projects', () => {
  render(<Projects />)

  it('Text rendered', () => {
    const text = screen.getByText('Roger Music')
    expect(text).toBeInTheDocument()
  })
})
