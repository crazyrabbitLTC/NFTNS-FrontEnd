import { useEthers } from '@usedapp/core'
import { useEffect, useState } from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

const NfTlist = () => {
  const { account } = useEthers()
  const [nfts, setNFTs] = useState([])
  console.log(nfts)
  useEffect(() => {
    const getNFTS = async () => {
      fetch(`https://api.opensea.io/api/v1/assets?owner=${account}`)
        .then((response) => response.json())
        .then((json) => setNFTs(json.assets))
    }
    if (account) {
      getNFTS()
    }
  }, [account])
  return (
    <div>
      <h2>{'NfTlist'}</h2>
      <Flex flexDirection="row">
        {nfts.map((nft) => (
          <div key={nft.token_id + nft.asset_contract}>
            <Image
              boxSize="75px"
              objectFit="cover"
              borderRadius={200}
              src={nft?.image_thumbnail_url}
              alt="just testing"
            />
          </div>
        ))}
      </Flex>
    </div>
  )
}

export default NfTlist
