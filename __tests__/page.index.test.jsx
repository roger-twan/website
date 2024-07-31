// import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import Home from '@/pages/index.page.tsx'

describe('Page Home', () => {
  // beforeEach(() => {
  //   window.SVGElement.prototype.getBBox = () => ({
  //     x: 0,
  //     y: 0,
  //   })
  //   render(<Home />)
  // })
  // afterEach(() => {
  //   delete window.SVGElement.prototype.getBBox
  // })

  it('test', () => {
    expect(2 + 3).toBe(5)
  })

  // it('Background video rendered', () => {
  //   const video = screen.getByTestId('video')
  //   expect(video).toBeInTheDocument()
  // })

  // it('Logo rendered', () => {
  //   const logo = screen.getByTestId('logo')
  //   expect(logo).toBeInTheDocument()
  // })

  // it('Nav rendered', () => {
  //   const nav = screen.getByTestId('nav')
  //   expect(nav).toBeInTheDocument()
  // })
})
