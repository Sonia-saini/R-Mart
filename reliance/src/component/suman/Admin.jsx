import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { Link, useNavigate } from "react-router-dom";
import { AppContest } from './authContext/AuthContextProvider';


const Admin = () => {
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");

    const {loginUser}=React.useContext(AppContest)

    const navigate = useNavigate();
    
    const loginStatus=(e)=>{
    e.preventDefault();
    
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res.token)
      if(res.token)
      {
        loginUser(res.token)
       navigate("/adminpage")
    
      }
    })
    .catch((err)=>{
      console.log(err)
    })
    }

    
  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email2">
            <FormLabel>Email address</FormLabel>
            <Input type="email"  value={email}
            onChange={(e)=>setEmail(e.target.value)} isRequired/>
          </FormControl>
          <FormControl id="password2">
            <FormLabel>Password</FormLabel>
            <Input type="password"  value={password}
              onChange={(e)=>setPassword(e.target.value)} isRequired/>
          </FormControl>
          <Stack spacing={10}>
            <Button onClick={loginStatus}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Sign in
            </Button>
          </Stack>

          <Link to="/">
          <Stack spacing={10}>
     
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Go Back
            </Button>

          </Stack>
          </Link>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Admin
