import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from '@/components/logo'

describe('Component Logo', () => {
  beforeEach(() => {
    window.SVGElement.prototype.getBBox = () => ({
      x: 0,
      y: 0,
    })
  })

  afterEach(() => {
    delete window.SVGElement.prototype.getBBox
  })

  it('Logo rendered', () => {
    render(<Logo />)

    const logo = screen.getByTestId('logo')
    expect(logo).toHaveClass('logo-loaded')
  })
})
