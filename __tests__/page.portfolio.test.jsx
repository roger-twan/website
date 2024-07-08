import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Portfolio from '@/pages/portfolio/index.page.tsx'

describe('Page Portfolio', () => {
  render(<Portfolio />)

  it('Text rendered', () => {
    const text = screen.getByText('Roger Music')
    expect(text).toBeInTheDocument()
  })
})
