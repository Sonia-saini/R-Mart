import { Box, Button, Text, Tooltip, Image } from "@chakra-ui/react";

const EmptyCart = () => {
  return (
    <Box align='center' py='12'>
      <Tooltip
        placement='right'
        bg='blackAlpha.700'
        label='Your Shopping Cart is Empty'
      >
        <Image
          src='https://i.postimg.cc/rwDJQRjL/emptycart.webp'
          alt='empty-cart'
        />
      </Tooltip>
      <Text fontSize='xl'>Your Shopping Cart is Empty</Text>
      <Button
        w='3xs'
        py='6'
        m='auto'
        mt='16'
        bg='red.600'
        color='white'
        fontSize='sm'
        boxShadow='lg'
        borderRadius='4'
        fontWeight='semibold'
        _hover={{ bg: "red.700" }}
        _active={{ bg: "red.700" }}
      >
        CONTINUE SHOPPING
      </Button>
    </Box>
  );
};

export default EmptyCart;
