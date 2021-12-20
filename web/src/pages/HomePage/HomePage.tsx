import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEthers } from '@usedapp/core'

import NfTlist from 'src/components/NFTlist/NfTlist'
const HomePage = () => {
  const account = useEthers()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {account?.account ? <NfTlist /> : 'Connect your wallet to continue'}
    </>
  )
}

export default HomePage
