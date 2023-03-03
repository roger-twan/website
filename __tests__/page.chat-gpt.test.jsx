import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatGPT from '@/pages/chat-gpt'

describe('Page ChatGPT', () => {
  render(<ChatGPT />)

  it('Text rendered', () => {
    const text = screen.getByText('Coming soon')
    expect(text).toBeInTheDocument()
  })
})
