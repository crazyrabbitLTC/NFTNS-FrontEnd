import { Flex, Text, Link } from '@chakra-ui/react'

import Header from './../../components/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Flex flexDirection="column" height="100vh">
        <Header />

        <Flex
          flexDirection="column"
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="1.5em"
          minHeight="3em"
        >
          <Text fontSize="sm">
            NFTNS by{' '}
            <Link href="http://www.dennisonbertram.com" isExternal>
              Dennison Bertram
            </Link>
            .
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default MainLayout
