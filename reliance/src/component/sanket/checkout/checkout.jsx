

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import React from "react";
import { WarningTwoIcon } from "@chakra-ui/icons";







const Checkout = () => {
  return (
    <Box>


      <Stack
        direction='column'
        px={{ base: "0", md: "2", lg: "8", xl: "20", "2xl": "28" }}
        py={{ base: "2", md: "6" }}
        align='center'
      >
        <Accordion w='100%' bg='white' allowMultiple>
          <Stack direction='column'>
            <AccordionItem>
              <Flex justify='space-between' align='center'>
                <AccordionButton
                  p='4'
                  bg='gray.100'
                  _hover={{ bg: "gray.100" }}
                  _expanded={{ bg: "white" }}
                >
                  <Heading as='span' fontSize='md' flex='1' textAlign='left'>
                    DELIVERY METHOD
                  </Heading>
                  <AccordionIcon fontSize='3xl' />
                </AccordionButton>
              </Flex>
              <AccordionPanel pb={4}>
                <Box>
                  <WarningTwoIcon />
                  <Text>There are no saved addresses.</Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <Flex justify='space-between' align='center'>
                <AccordionButton
                  p='4'
                  bg='gray.100'
                  _hover={{ bg: "gray.100" }}
                  _expanded={{ bg: "white" }}
                >
                  <Heading as='span' fontSize='md' flex='1' textAlign='left'>
                    ORDER DETAILS
                  </Heading>
                  <AccordionIcon fontSize='3xl' />
                </AccordionButton>
              </Flex>
              <AccordionPanel pb={4}>Attach a modal</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <Flex justify='space-between' align='center'>
                <AccordionButton
                  p='4'
                  bg='gray.100'
                  _hover={{ bg: "gray.100" }}
                  _expanded={{ bg: "white" }}
                >
                  <Heading as='span' fontSize='md' flex='1' textAlign='left'>
                    PAY SECURELY
                  </Heading>
                  <AccordionIcon fontSize='3xl' />
                </AccordionButton>
              </Flex>
              <AccordionPanel pb={4}>Attach a modal</AccordionPanel>
            </AccordionItem>
          </Stack>
        </Accordion>
</Stack>
      <Stack direction='column' align='center'>
        <Box>Delivery Method</Box>
        <Box>Order Details</Box>
        <Box>Pay Securely</Box>

      </Stack>
    </Box>
  );
};

export default Checkout;
