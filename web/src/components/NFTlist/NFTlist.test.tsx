import { render } from '@redwoodjs/testing/web'

import NfTlist from './NfTlist'

describe('NfTlist', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NfTlist />)
    }).not.toThrow()
  })
})
