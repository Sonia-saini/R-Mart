import React,{useState} from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    // Container,
    // InputRightElement,
    // Center
  } from '@chakra-ui/react';
 import axios from "axios";
 import {Link,useNavigate} from "react-router-dom"
//  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';

const Register = () => {
  const toast = useToast()
   const [firstName,setFirstName]=useState("");
   const [lastName,setLastName]=useState("");
   const [email,setEmail]=useState("");
   const [mobile,setMobile]=useState("");

const navigate=useNavigate()

let userdata={
    firstName:firstName,
    lastName:lastName,
    email:email,
    mobile:mobile
}
const getData=()=>{
   return axios.post(`https://blog-data-tan.vercel.app/register`,userdata)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    getData()
   if(firstName===""|| lastName===""||email===""||mobile==="")
   {
    toast({
      title: 'Please fill the details carefully',
      description: "Put details",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
   }
   else{
    toast({
      title: 'Your OTP is 143143',
      description: "Please Put OTP Carefully.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
navigate("/otp")
   }
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
          Register / Login
        </Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName2" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" required value={firstName} 
                 onChange={(e)=>setFirstName(e.target.value)} isRequired/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName2">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} isRequired/>
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email2" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} isRequired/>
          </FormControl>
          <FormControl id="mobile" isRequired>
            <FormLabel>Mobile no</FormLabel>
            <InputGroup>
            <Input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} isRequired/> 
              
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button onClick={handleSubmit}
              loadingText="Submitting"
              size="lg"
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Proceed
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <Link color={'blue.400'} to="/login">Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>





 
   
    
  )
}

export default Register
