import { render } from '@redwoodjs/testing/web'

import Web3connect from './Web3connect'

describe('Web3connect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Web3connect />)
    }).not.toThrow()
  })
})
