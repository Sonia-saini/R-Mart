import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,useToast
    
  } from '@chakra-ui/react';
  import { Link,useNavigate } from 'react-router-dom';
  import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from './Saurabh/Navbar';

const Payment = () => {
  const navigate=useNavigate()
  const toast = useToast()
  let [name,setName]=React.useState("")
  let [number,setNumber]=React.useState("")
  let [expiry,setExpiry]=React.useState("")
  let [cvv,setCvv]=React.useState("")
   

const paymetfunc=()=>{
  if(name=="" || number=="" || expiry=="" || cvv==""||number.length<16||cvv.length<3||number.length>16)
  {
    toast({
      title: 'Please fill all the details',
      description: "One or more input,you need to put",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
  else{
    localStorage.removeItem("cart-item");
    toast({
        title: 'Payment Successfull',
        description: "Your will receive your order in the next 3 days.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate("/")
  }
    
    // alert("yes")
}

const paymetfunc2=()=>{
    localStorage.removeItem("cart-item");
    toast({
        title: 'Be ready with the payment',
        description: "Your will receive your order in the next 3 days.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate("/")
 
    
}

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
          <Heading fontSize={'4xl'} textAlign={'center'}>
           Fill the payment details
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            pay through the credit card or debit cart
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
        
            <FormControl id="card_number" isRequired>
              <FormLabel>Card Number</FormLabel>
              <Input value={number} onChange={(e)=>setNumber(e.target.value)} type="number"  />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="Expiry" isRequired>
                  <FormLabel>Expiry</FormLabel>
                  <Input value={expiry} onChange={(e)=>setExpiry(e.target.value)} type="month"/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="CVV">
                  <FormLabel>CVV</FormLabel>
                  <Input value={cvv} onChange={(e)=>setCvv(e.target.value)} type="text" maxlength={"3"}/>
                </FormControl>
              </Box>
            </HStack>


            <FormControl id="name" isRequired>
              <FormLabel>Enter name</FormLabel>
              <InputGroup>
                <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                
              </InputGroup>
            </FormControl>
            {/* <Link to="/"> */}
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={paymetfunc}>
                Pay
              </Button>
            </Stack>
            {/* </Link> */}
            {/* <Stack pt={6}>
               
              <Text align={'center'}>
                 <Text fontWeight="bolder" color={'black.400'} cursor="pointer"
                 onClick={paymetfunc2}
                 >Cash on delivery</Text>
              </Text>
             
            </Stack> */}
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }} onClick={paymetfunc2}>
                Cash on delivery
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  )
}

export default Payment