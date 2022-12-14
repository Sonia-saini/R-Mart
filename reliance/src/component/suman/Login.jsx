import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
   
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [mobile,setMobile]=useState();
    const [otp,setOtp]=useState("")

const getData=()=>{
    return axios.get(`https://blog-data-tan.vercel.app/register`)
}

    const handleLogin=(e)=>{
        e.preventDefault()
getData()
.then((res)=>{
    checkcredentials(res.data)
})

    }

    const checkcredentials=(data)=>{
        let filtered=data.filter((el)=>{
          return el.mobile==mobile
        })
        return finalcheck(filtered)
      }
       
      const finalcheck=(filtered)=>{
        if(filtered.length>0){
        alert("Your OTP is 987654")
      
         } else{
        alert("login failed")
         }
      }

const handleOtpPart=(e)=>{
e.preventDefault()
otp==="987654" ?alert("login succesful"):alert("put right input")

}

  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'xl'} textAlign={'center'}>
          Login
        </Heading>
       
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="email" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </FormControl>
         
          <Stack spacing={10} pt={2}>
            <Button onClick={handleLogin}
              loadingText="Submitting"
              size="lg"
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Sign in
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Not a user? <Link  to="/register" color={'blue.400'}>Register</Link>
            </Text>
          </Stack>

          <FormControl id="otpw" isRequired>
            <FormLabel>OTP</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} value={otp}
                onChange={(e)=>setOtp(e.target.value)}
              />
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
          </FormControl>


          <Stack spacing={10} pt={2}>
            <Button onClick={handleOtpPart}
              loadingText="Submitting"
              size="lg"
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Verify
            </Button>
          </Stack>

        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Login
