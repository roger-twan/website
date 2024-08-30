import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Head from '@/components/head'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => <>{children}</>,
  }
})

describe('Component Head', () => {
  it('Render title', () => {
    render(<Head title="test" />)

    expect(document.title).toBe('test | Roger Twan')
  })
})
