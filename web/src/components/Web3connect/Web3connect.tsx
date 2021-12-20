import {
  useEthers,
  shortenAddress,
  getChainName,
  useLookupAddress
} from '@usedapp/core'
import { useMediaQuery } from '@chakra-ui/react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

// hooks
import { useLocalStorage } from '../../common/useLocalStorage'

const Web3Connect = () => {
  const { activateBrowserWallet, deactivate, active, account, chainId } =
    useEthers()
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

  const [persistConnection, setPersistConnection] = useLocalStorage(
    'walletConnection',
    false
  )

  const ens = useLookupAddress()
console.log(ens)
  useEffect(() => {
    if (persistConnection) activateBrowserWallet()
  }, [active, activateBrowserWallet, persistConnection])

  const connectControl = () => {
    if (account) {
      setPersistConnection(false)
      deactivate()
      return
      // Maybe add a toast here?
    }
    setPersistConnection(true)
    activateBrowserWallet()
  }

  return (
    <Flex alignItems="center">
      <Text fontSize="xl" fontWeight="bold" marginRight="15px">
        {account && isLargerThan900 ? getChainName(chainId) : null}
      </Text>
      <Button onClick={() => connectControl()}>
        {account ? (
          <Text
            fontSize="sm"
            fontWeight="bold"
            marginRight="15px"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
          >
            {isLargerThan900 ? ens ?? account : ens ?? shortenAddress(account)}
          </Text>
        ) : (
          'Connect'
        )}
      </Button>
    </Flex>
  )
}

export default Web3Connect
