import React from 'react'
import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,InputRightElement,InputGroup
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { useToast } from '@chakra-ui/react';
import Navbar from '../Saurabh/Navbar';

const Otp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [otp,setOtp]=useState("");

    const navigate=useNavigate();
    const toast = useToast()

const handleOtp=(e)=>{
    e.preventDefault();
    if(otp==="143143")
    {
      toast({
        title: 'Account Created',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
        navigate("/login")
    }
    else
    {
      toast({
        title: 'You put wrong otp',
        description: "We have not created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
          
    }
}
  return (
    <>
<Navbar/>
   
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'right'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: 'xl', md: '2xl' }}>
           OTP verification
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
         Please enter the otp sent to your mobile number
        </Center>

        <FormControl>
          <Center>
            <HStack>
              <InputGroup>
              <Input type={showPassword ? 'text' : 'password'}
              value={otp} onChange={(e)=>setOtp(e.target.value)} isRequired/>
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button onClick={handleOtp}
            bg={'red.400'}
            color={'white'}
            _hover={{
              bg: 'red.500',
            }}>
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
    </>
  )
}

export default Otp
