import {
  Box,
  Text,
  Show,
  Hide,
  Stack,
  Image,
  Button,
  Heading,
  IconButton,
  useControllableState
} from "@chakra-ui/react";
import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ProductDetails = ({ actualPrice }) => {
  return (
    <Box textAlign={{ base: "left", md: "right" }}>
      <Heading
        fontSize={{ base: "sm", md: "md", lg: "lg" }}
        fontWeight='medium'
        lineHeight='30px'
        letterSpacing='0.5px'
        color={{ base: "blue.800", md: "black" }}
      >
        {actualPrice()}
      </Heading>
      <Text
        fontSize='xs'
        color='gray.500'
        lineHeight='20px'
        letterSpacing='0.2px'
      >
        Inclusive of all taxes
      </Text>
      <Text
        fontSize='xs'
        fontWeight='semibold'
        letterSpacing='0.2px'
        lineHeight='30px'
        color={{ base: "green.600", md: "green.500" }}
      >
        Free Shipping
      </Text>
      <Text
        fontSize='xs'
        lineHeight='18px'
        fontWeight='semibold'
        color='blackAlpha.700'
      >
        *Delivery assurance is subject to our delivery locations staying open as
        per govt. regulations
      </Text>
    </Box>
  );
};

const SingleCart = ({ items, url, price, name, category }) => {
  const [value, setValue] = React.useState(1);
  const [length, setLength] = React.useState(1);
  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue
  });

  const actualPrice1 = () => {
    if (typeof price === "string" && price.includes("₹")) {
      return +price.split(".")[0];
    } else return `₹${price.toLocaleString("en-US")}`;
  };

  const actualPrice2 = () => {
    if (typeof price === "string" && price.includes("₹")) {
      return price;
    } else return `₹${price.toLocaleString("en-US")}.00`;
  };

  const handleMinus = (name) => {
    setInternalValue(value - 1);

    let updatedQty = items.map((ele) => {
      if (ele.name === name) {
        ele.quantity = value - 1;
      }
      return ele;
    });
    localStorage.setItem("cart-item", JSON.stringify(updatedQty));
    window.location.reload();
  };

  const handlePlus = (name) => {
    setInternalValue(value + 1);

    let updatedQty = items.map((ele) => {
      if (ele.name === name) {
        ele.quantity = value + 1;
      }
      return ele;
    });
    localStorage.setItem("cart-item", JSON.stringify(updatedQty));
    window.location.reload();
  };

  const removeItem = (name) => {
    let cartArr = JSON.parse(localStorage.getItem("cart-item")) || [];
    let afterRemove = cartArr.filter((ele) => {
      return ele.name !== name;
    });
    localStorage.setItem("cart-item", JSON.stringify(afterRemove));
    window.location.reload();
  };

  return (
    <Box bg='white' boxShadow='sm'>
      <Box px='4' pt='4' pb={{ base: "4", sm: "6" }}>
        <Stack direction='row' justify='space-between' align='flex-start'>
          <Stack
            direction='row'
            align='flex-start'
            justify='space-between'
            maxW={{ base: "100%", sm: "90%", md: "65%", lg: "60%" }}
            gap='1'
          >
            <Stack direction='column' justify='center' align='center'>
              <Image
                w={{ base: "100px", sm: "125px", md: "150px" }}
                src={url}
                alt={category}
              />
              <Stack
                direction='row'
                justify='left'
                align='center'
                gap={{ base: "0", sm: "2", lg: "0", xl: "2" }}
              >
                <IconButton
                  size='xs'
                  w={{ base: "4", sm: "8" }}
                  h={{ base: "6", sm: "8" }}
                  color='black'
                  borderRadius='sm'
                  bg='blackAlpha.300'
                  isDisabled={value === 1}
                  _disabled={{
                    bg: "gray.100",
                    color: "gray.600",
                    cursor: "not-allowed"
                  }}
                  icon={<MinusIcon />}
                  onClick={() => handleMinus(name)}
                />
                <Button
                  size='xs'
                  w={{ base: "4", sm: "8" }}
                  h={{ base: "6", sm: "8" }}
                  borderRadius='sm'
                  isDisabled
                  outline='1px solid lightgray'
                  _hover={{ color: "black", bg: "white" }}
                  _active={{ color: "black", bg: "white" }}
                  _disabled={{
                    color: "black",
                    bg: "white",
                    cursor: "not-allowed"
                  }}
                >
                  {internalValue}
                </Button>
                <IconButton
                  size='xs'
                  w={{ base: "4", sm: "8" }}
                  h={{ base: "6", sm: "8" }}
                  color='black'
                  borderRadius='sm'
                  bg='blackAlpha.300'
                  _hover={{ bg: "blackAlpha.300" }}
                  icon={<AddIcon />}
                  onClick={() => handlePlus(name)}
                />
              </Stack>
            </Stack>
            <Box textAlign='left'>
              <Heading
                size={{ base: "3xs", md: "xs" }}
                fontSize={{ base: "xs", md: "sm" }}
                lineHeight={{ base: "16px", sm: "20px" }}
                noOfLines={2}
                color='blue.700'
                textAlign='left'
                fontWeight='semibold'
              >
                {name}
              </Heading>
              <Show below='md'>
                <ProductDetails actualPrice={actualPrice2} />
              </Show>
            </Box>
          </Stack>
          <Hide below='md'>
            <ProductDetails actualPrice={actualPrice1} />
          </Hide>
        </Stack>
      </Box>
      <Button
        w='100%'
        bg='white'
        color='blue.500'
        borderRadius='none'
        _hover={{ bg: "white" }}
        _active={{ bg: "gray.100" }}
        borderTop='1px solid lightgray'
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight={{ base: "bold", md: "semibold" }}
        onClick={() => removeItem(name)}
      >
        Remove
      </Button>
    </Box>
  );
};

export default SingleCart;
