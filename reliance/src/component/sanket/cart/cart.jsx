import React from "react";
import { getData } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Text,
  Tooltip,
  Image,
  Spinner,
  Heading,
  Stack,
  HStack,
  Input,
  FormControl
} from "@chakra-ui/react";
import CartErr from "./cartErr";
import EmptyCart from "./emptyCart";
import SingleCart from "./singleCart";

const Cart = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((store) => store.cart);

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading) {
    return (
      <Box align='center' py='12'>
        <Spinner thickness='4px' speed='0.6s' color='red.600' size='xl' />
      </Box>
    );
  }

  if (error) {
    return <CartErr />;
  }

  if (!items.computers || !items.computers.length) {
    return <EmptyCart />;
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // console.log(items.computers);

  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justify='center'
        gap='6'
        px={{ base: "0", md: "8", lg: "8", xl: "20", "2xl": "24" }}
        py='4'
        bg='gray.100'
      >
        <Stack
          border='2px solid'
          w='100%'
          direction='column'
          align='left'
          gap='4'
        >
          <HStack align='center' bg='white' boxShadow='md' p='4'>
            <Heading as='h1' size='sm' fontWeight='semibold'>
              My Cart
            </Heading>
            <Text fontSize='sm' color='blackAlpha.800'>
              (
              {`${items.computers.length} ${
                items.computers.length === 1 ? "item" : "items"
              }`}
              )
            </Text>
          </HStack>
          {items.computers.map((item) => (
            <SingleCart key={item.id} {...item} />
          ))}
        </Stack>
        <Box height='min-content' alignSelf='right' w='50%' bg='white'>
          <Button
            w='100%'
            m='auto'
            py='4'
            // mb='4'
            bg='red.600'
            color='white'
            fontSize='sm'
            boxShadow='lg'
            borderRadius='4'
            fontWeight='medium'
            _hover={{ bg: "red.700" }}
            _active={{ bg: "red.700" }}
          >
            CHECKOUT
          </Button>
          <Box p='4'>
            <Stack>
              <FormControl>
                <Stack direction='row' align='center' justify='space-between'>
                  <Input
                    type='text'
                    value={value}
                    onChange={handleChange}
                    placeholder='Coupen Code'
                  />
                  <Button bg='white' type='submit'>
                    APPLY
                  </Button>
                </Stack>
              </FormControl>
            </Stack>
            <Stack
              direction='column'
              align='stretch'
              fontSize='xs'
              color='blackAlpha.800'
              justify='space-between'
            >
              <Heading size='sm'>PRICE DETAILS</Heading>
              <Stack direction='row' align='center' justify='space-between'>
                <Text>
                  Price (
                  {`${items.computers.length} ${
                    items.computers.length === 1 ? "item" : "items"
                  }`}
                  )
                </Text>
                <Text>&#8377;{(45464).toLocaleString("en-US")}</Text>
              </Stack>
              <Stack direction='row' align='center' justify='space-between'>
                <Text>Delivery Charges</Text>
                <Text>&#8377;50</Text>
              </Stack>
              <Stack direction='row' align='center' justify='space-between'>
                <Text>AMOUNT PAYABLE</Text>
                <Text>&#8377;{(45464).toLocaleString("en-US")}</Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Cart;
