import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { AppContest } from './authContext/AuthContextProvider';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
import AdminNavbar from './AdminNavbar';

const UserDetails = () => {
    const [data,setData]=React.useState([])
   


const getData=()=>{
return axios.get(`https://blog-data-tan.vercel.app/register`)
}

React.useEffect(()=>{
    getData()
    .then((res)=>{
setData(res.data)
    })
})

  return (
    <>
<AdminNavbar/>
   
    <Box p={4}>
    <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'}>Total Users : {data.length}</Heading>
      
    </Stack>

    <Container maxW={'6xl'} mt={10}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {data.map((feature) => (
          <HStack key={feature.id} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={400}>Email : {feature.email}</Text>
              <Text color={'gray.600'}>Name : {feature.firstName} {feature.lastName}</Text>
              <Text color={'gray.600'}>Mobile No: {feature.mobile}</Text>
            </VStack>
          </HStack>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
  </>
  )
}

export default UserDetails
