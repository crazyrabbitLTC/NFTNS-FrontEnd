import { routes } from '@redwoodjs/router'
import { Flex, Text, Link } from '@chakra-ui/react'
import Web3Connect from '../../components/Web3Connect'

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      margin="1.5em"
      minHeight="3em"
    >
      <Link to={routes.home()}>
        <Text fontSize="2xl" fontWeight="bold">
         NFTNS
        </Text>
      </Link>
      <Web3Connect />
    </Flex>
  )
}

export default Header
