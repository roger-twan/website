import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CommonHeader from '@/components/commonHeader'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => <>{children}</>,
  }
})

describe('Component Common Header', () => {
  it('Render title', () => {
    render(<CommonHeader title="test" />)

    expect(document.title).toBe("test | Roger's Lab")
  })
})
