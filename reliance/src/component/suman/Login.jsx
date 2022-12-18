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
  import { Link,useNavigate } from 'react-router-dom';
   import axios from 'axios';
   import { useToast } from '@chakra-ui/react';
   import Navbar from '../Saurabh/Navbar';
import Menubar from '../mitali/allRoute/Menubar';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [mobile,setMobile]=useState();
    const [otp,setOtp]=useState("");

    const navigate=useNavigate()
    const toast = useToast()
    const status = [ 'warning'];


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
        toast({
          title: 'Your OTP is 987654',
          description: "Please Put OTP Carefully.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
       
         } 
         else
         {
          toast({
            title: `Mobile Number not registered`,
            status: status,
            isClosable: true,
          })


         }
      }

const handleOtpPart=(e)=>{
e.preventDefault()
if(otp==="987654")
{
  toast({
    title: 'Login Successful',
    description: "We've created your account for you.",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
  navigate("/")
}
else{
  toast({
    title: 'You put wrong OTP',
    description: "Please Put right OTP",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
}
 

}

  return (
    <>
<Navbar/>
   <Menubar/>
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'right'}
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
            <Input type="email" value={mobile} onChange={(e)=>setMobile(e.target.value)} isRequired/>
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
              Not a user? <Link  to="/registration" color={'blue.400'}>Register</Link>
            </Text>
          </Stack>

          <FormControl id="otpw" isRequired>
            <FormLabel>OTP</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} value={otp}
                onChange={(e)=>setOtp(e.target.value)} isRequired
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
  </>
  )
}

export default Login
