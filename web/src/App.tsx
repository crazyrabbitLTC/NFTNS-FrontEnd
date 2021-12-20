import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

// Chakra
import { ChakraProvider } from '@chakra-ui/react'

// UseDapp
import { ChainId, DAppProvider } from '@usedapp/core'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const web3config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/1e4227efe6c44a10be8fec7db4c9b168',
  },
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <RedwoodApolloProvider>
        <ChakraProvider>
          <DAppProvider config={web3config}>
            <Routes />
          </DAppProvider>
        </ChakraProvider>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
