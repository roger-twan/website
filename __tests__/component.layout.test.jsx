import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from '@/components/layout'

jest.mock('next/navigation', () => ({
  useSearchParams() {
    return {
      get: () => null,
    }
  },
}))

describe('Component Layout', () => {
  it('Route rendered correctly', () => {
    render(<Layout />)

    const homeLink = screen.getAllByRole('link')[0]
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
