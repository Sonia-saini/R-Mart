import { Box, Button, Text, Tooltip, Image } from "@chakra-ui/react";
import Menubar from "../../mitali/allRoute/Menubar";
import Navbar from "../../Saurabh/Navbar";

const CartErr = () => {
  return (
    <>
    <Navbar/>
    <Menubar/>
    <Box align='center' py='12'>
      <Tooltip
        placement='right'
        bg='blackAlpha.700'
        label='Your Shopping Cart is Empty'
      >
        <Image
          w='xs'
          m='auto'
          alt='offline'
          src='https://i.postimg.cc/zvhwR7bf/offline.webp'
        />
      </Tooltip>
      <Text fontSize='lg' mt='8' fontWeight='semibold' color='red.600'>
        OOPS LOOKS LIKE YOU ARE OFFLINE
      </Text>
      <Text fontSize='xs' mt='2' fontWeight='medium' color='gray.600'>
        PLEASE CHECK YOUR INTERNET CONNECTION.
      </Text>
      <Button
        w={{ base: "2xs", sm: "xs" }}
        py='6'
        m='auto'
        mt='8'
        bg='red.600'
        color='white'
        fontSize='md'
        boxShadow='lg'
        borderRadius='4'
        fontWeight='bold'
        _hover={{ bg: "red.700" }}
        _active={{ bg: "red.700" }}
      >
        RETRY
      </Button>
    </Box>
    </>
  );
};

export default CartErr;
