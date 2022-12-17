import React from 'react'
import { Flex, Spacer, Center, Text, Square } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
<Flex color='white'>
  <Center w='33.33%' bg='blue'>
    <Text>Box 1</Text>
  </Center>
  <Square bg='blue' size='550px' w='33.33%'>
    <Text>Box 2</Text>
  </Square>
  <Square bg='blue' size='550px' w='33.33%'>
    <Text>Box 2</Text>
  </Square>
</Flex>

    </div>
  )
}

export default Footer;