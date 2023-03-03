import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from '@/components/nav'
import { NAV_LIST } from '@/global.config'

describe('Component Nav', () => {
  it('Render menu list', () => {
    render(<Nav />)

    const links = screen.getAllByRole('link')
    const renderedTitles = links.map((item) => item.textContent)
    const expectedTitles = NAV_LIST.map((item) => item.title)

    expect(renderedTitles).toEqual(expectedTitles)
  })
})
