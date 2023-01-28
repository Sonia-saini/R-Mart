import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from '../../Saurabh/Navbar';
import { Link } from 'react-router-dom';

// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Flex,
//   Heading,
//   Stack,
//   Text
// } from "@chakra-ui/react";
// import React from "react";
// import { WarningTwoIcon } from "@chakra-ui/icons";


// <Box>
//       <Stack
//         direction='column'
//         px={{ base: "0", md: "2", lg: "8", xl: "20", "2xl": "28" }}
//         py={{ base: "2", md: "6" }}
//         align='center'
//       >
//         <Accordion w='100%' bg='white' allowMultiple>
//           <Stack direction='column'>
//             <AccordionItem>
//               <Flex justify='space-between' align='center'>
//                 <AccordionButton
//                   p='4'
//                   bg='gray.100'
//                   _hover={{ bg: "gray.100" }}
//                   _expanded={{ bg: "white" }}
//                 >
//                   <Heading as='span' fontSize='md' flex='1' textAlign='left'>
//                     DELIVERY METHOD
//                   </Heading>
//                   <AccordionIcon fontSize='3xl' />
//                 </AccordionButton>
//               </Flex>
//               <AccordionPanel pb={4}>
//                 <Box>
//                   <WarningTwoIcon />
//                   <Text>There are no saved addresses.</Text>
//                 </Box>
//               </AccordionPanel>
//             </AccordionItem>

//             <AccordionItem>
//               <Flex justify='space-between' align='center'>
//                 <AccordionButton
//                   p='4'
//                   bg='gray.100'
//                   _hover={{ bg: "gray.100" }}
//                   _expanded={{ bg: "white" }}
//                 >
//                   <Heading as='span' fontSize='md' flex='1' textAlign='left'>
//                     ORDER DETAILS
//                   </Heading>
//                   <AccordionIcon fontSize='3xl' />
//                 </AccordionButton>
//               </Flex>
//               <AccordionPanel pb={4}>Attach a modal</AccordionPanel>
//             </AccordionItem>

//             <AccordionItem>
//               <Flex justify='space-between' align='center'>
//                 <AccordionButton
//                   p='4'
//                   bg='gray.100'
//                   _hover={{ bg: "gray.100" }}
//                   _expanded={{ bg: "white" }}
//                 >
//                   <Heading as='span' fontSize='md' flex='1' textAlign='left'>
//                     PAY SECURELY
//                   </Heading>
//                   <AccordionIcon fontSize='3xl' />
//                 </AccordionButton>
//               </Flex>
//               <AccordionPanel pb={4}>Attach a modal</AccordionPanel>
//             </AccordionItem>
//           </Stack>
//         </Accordion>
// </Stack>
//       <Stack direction='column' align='center'>
//         <Box>Delivery Method</Box>
//         <Box>Order Details</Box>
//         <Box>Pay Securely</Box>

//       </Stack>
//     </Box>




const Checkout = () => {
  return (
    <>
    <Navbar/>
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Add Your Address</Heading>
        {/* <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
        </Text> */}
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" isRequired/>
          </FormControl>

          <FormControl id="number" isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="number" isRequired/>
          </FormControl>

          <FormControl id="state" isRequired>
            <FormLabel>State</FormLabel>
            <Input type="text" isRequired/>
          </FormControl>

          <FormControl id="city" isRequired>
            <FormLabel>City</FormLabel>
            <Input type="text" isRequired/>
          </FormControl>

          <FormControl id="street" isRequired>
            <FormLabel>Street</FormLabel>
            <Input type="text" isRequired/>
          </FormControl>

          <FormControl id="pin" isRequired>
            <FormLabel>Pin code</FormLabel>
            <Input type="number" isRequired/>
          </FormControl>


          <Stack spacing={10}>
            {/* <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack> */}
            <Link to="/payment">
            <Button w="200px"
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Add
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  </>
  );
};

export default Checkout;
