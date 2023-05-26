import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Ai from '@/pages/ai'

describe('Page Ai', () => {
  render(<Ai />)

  it('Text rendered', () => {
    const text = screen.getByText('In progress')
    expect(text).toBeInTheDocument()
  })
})
