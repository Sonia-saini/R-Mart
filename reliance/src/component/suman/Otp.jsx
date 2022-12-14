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

const Otp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [otp,setOtp]=useState("");
    const navigate=useNavigate()

const handleOtp=(e)=>{
    e.preventDefault();
    if(otp==="825109")
    {
        alert("signin successful")
        console.log(otp)
        navigate("/login")
    }
    else{
        alert("You put wrong otp")
    }
}
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
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
            Verify your Mobile Number
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your Mobile
        </Center>

        <FormControl>
          <Center>
            <HStack>
              <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} 
              value={otp} onChange={(e)=>setOtp(e.target.value)}/>
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
  )
}

export default Otp
