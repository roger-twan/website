import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from '@/components/layout'

describe('Component Layout', () => {
  it('Route rendered correctly', () => {
    render(<Layout />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})
