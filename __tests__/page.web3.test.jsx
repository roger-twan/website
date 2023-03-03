import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Web3 from '@/pages/web3'

describe('Page Web3', () => {
  render(<Web3 />)

  it('Text rendered', () => {
    const text = screen.getByText('Coming soon')
    expect(text).toBeInTheDocument()
  })
})
