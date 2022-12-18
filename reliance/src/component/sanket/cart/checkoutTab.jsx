import React from "react";
import {
  Box,
  Show,
  Hide,
  Text,
  Flex,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  FormLabel,
  FormControl
} from "@chakra-ui/react";
import { Navigate, NavLink } from "react-router-dom";

const CheckoutTab = ({ items }) => {
  const [value, setValue] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const total = () => {
    let modifiedPrices = [];
    items.map((item) => {
      let newPrice;
      if (typeof item.price === "string" && item.price.includes("₹")) {
        newPrice = item.price.split(".")[0];
        newPrice = newPrice.split("₹")[1];
        newPrice = Number(newPrice.split(",").join(""));
        modifiedPrices.push(newPrice);
      } else modifiedPrices.push(+item.price);
      return modifiedPrices;
    });
    let totalPrice = modifiedPrices.reduce((acc, price) => acc + price);
    return totalPrice;
  };

  // let updatedPrice = total();
  // console.log(updatedPrice);

  // const handleCoupen = (e) => {
  //   e.preventDefault();
  //   if (value === "MASAI30" && !flag) {
  //     setFlag(true);
  //     updatedPrice -= updatedPrice * 0.3;
  //     return toast({
  //       title: "Hurrray, Your coupen has been applied!",
  //       description: "",
  //       status: "success",
  //       duration: 3000
  //     });
  //   } else {
  //     return toast({
  //       title: "Invalid Coupen: Please try another!",
  //       description: "",
  //       status: "error",
  //       duration: 3000
  //     });
  //   }
  // };

  return (
    <Box height='min-content' w={{ base: "100%", md: "50%" }} m='auto'>
      <Hide below='md'>
        <NavLink to='/checkout'>
          <Button
            w='100%'
            m='auto'
            mb='4'
            py='4'
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
        </NavLink>
      </Hide>
      <Box p='4' bg='white' boxShadow='md'>
        <Box>
          <form>
            <Show below='md'>
              <Heading
                fontSize='md'
                fontWeight='semibold'
                mb='4'
                textAlign='left'
              >
                HAVE A COUPEN?
              </Heading>
            </Show>
            <FormControl variant='floating'>
              <Flex align='center' borderWidth='thin' justify='space-between'>
                <Input
                  type='text'
                  value={value}
                  border='none'
                  placeholder=' '
                  borderRadius='none'
                  onChange={handleChange}
                />
                <FormLabel color='blue.500'>Coupen Code</FormLabel>
                <Button
                  bg='white'
                  type='submit'
                  fontSize='xs'
                  color='blue.500'
                  py='0'
                  borderRadius='none'
                  borderLeftWidth='medium'
                  borderLeftColor='blue.500'
                  _hover={{
                    outlineWidth: "thin",
                    outlineOffset: "0px",
                    outlineColor: "blue.500"
                  }}
                  _focus={{
                    bg: "gray.100",
                    outlineWidth: "thin",
                    outlineOffset: "0px",
                    outlineColor: "blue.500"
                  }}
                >
                  APPLY
                </Button>
              </Flex>
            </FormControl>
          </form>
        </Box>
        <Stack
          direction='column'
          align='stretch'
          fontSize='xs'
          color='blackAlpha.800'
          justify='space-between'
          pt='3'
          pb='2'
        >
          <Heading
            pt='4'
            size='sm'
            textAlign='left'
            fontWeight='semibold'
            borderTopWidth='thin'
          >
            PRICE DETAILS
          </Heading>
          <Stack direction='row' py='1' align='center' justify='space-between'>
            <Text>
              Price (
              {`${items.length} ${items.length === 1 ? "item" : "items"}`})
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight='bold'
            >{`₹${total().toLocaleString("en-US")}`}</Text>
          </Stack>
          <Stack direction='row' pb='1' align='center' justify='space-between'>
            <Text>Delivery Charges</Text>
            <Text
              fontWeight='semibold'
              color={total() < 500 ? "black" : "green.500"}
            >
              {total() < 500 ? "₹50" : "FREE"}
            </Text>
          </Stack>
          <Stack
            py='2'
            direction='row'
            align='center'
            justify='space-between'
            borderTopWidth='thin'
            borderBottomWidth='thin'
          >
            <Heading fontWeight='semibold' size='sm'>
              AMOUNT PAYABLE
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight='semibold'
              color='blue.800'
            >
              {total() < 500
                ? `₹${total() + 50}`
                : `₹${total().toLocaleString("en-US")}`}
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Text
        mt='4'
        color='gray.500'
        textAlign='left'
        fontSize='xs'
        fontWeight='semibold'
        letterSpacing='0.5px'
      >
        Safe and Secure Payments. Easy returns. 100% Authentic products.
      </Text>
      <Show below='md'>
        <Flex
          bg='white'
          justift='space-between'
          align='center'
          w='100vw'
          h='50px'
          pos='fixed'
          bottom='0'
        >
          <Text
            fontSize='sm'
            fontWeight='semibold'
            w='100vw'
            textAlign='center'
            color='blue.700'
          >
            Total:{" "}
            {total() < 500
              ? `₹${total() + 50}`
              : `₹${total().toLocaleString("en-US")}`}
          </Text>
          {/* <NavLink to='/checkout'> */}
          <Button
            fontSize='xs'
            fontWeight='semibold'
            borderRadius='none'
            w='100vw'
            h='100%'
            color='white'
            bg='red.600'
            _hover={{ bg: "red.700" }}
            _active={{ bg: "red.700" }}
            onClick={() => {
              window.location.href = "/checkout";
            }}
          >
            CHECKOUT
          </Button>
          {/* </NavLink> */}
        </Flex>
      </Show>
    </Box>
  );
};

export default CheckoutTab;
