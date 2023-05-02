import React from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    GridItem,Select
  } from '@chakra-ui/react';
  import axios from "axios";
  import { useToast } from '@chakra-ui/react';
import AdminNavbar from './AdminNavbar';

const AddNewJuicer = () => {
    const toast = useToast()

    const [url,setUrl]=React.useState("")
  const [title,setTitle]=React.useState("")
  const [price,setPrice]=React.useState()
  const [description,setDescription]=React.useState("")
  const [rating,setRating]=React.useState("")
  
  const getData=()=>{
  
    return axios({
        method:"POST",
        url:"",
        data:{url,title,price,description,rating}
    })
  }
  
  const handleAddProduct=()=>{
    getData()
    .then((res)=>{
      console.log(res.data)
      toast({
        title: 'Product added successfully.',
        description: "You can add more product",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
  }
  

  return (
    <>
<AdminNavbar/>

         <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
         Add New Juicer Product
        </Heading>
        <FormControl id="url" isRequired>
          <FormLabel>URL</FormLabel>
          <Input value={url} onChange={(e)=>setUrl(e.target.value)}
            placeholder="product url"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={title} onChange={(e)=>setTitle(e.target.value)}
            placeholder="product title"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input value={description} onChange={(e)=>setDescription(e.target.value)}
            placeholder="description"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>

        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <Input value={price} onChange={(e)=>setPrice(e.target.value)}
            placeholder="price"
            _placeholder={{ color: 'gray.500' }}
            type="number"
          />
        </FormControl>

        <FormControl id="rating" isRequired>
          <FormLabel>Rating</FormLabel>
          <Input value={rating} onChange={(e)=>setRating(e.target.value)}
            placeholder="rating"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>

        <Stack spacing={6} direction={['column', 'row']}>
       
          <Button  onClick={handleAddProduct}
            bg={'red.400'}
            color={'white'}
            w="100%"
            _hover={{
              bg: 'red.500',
            }}>
            Add Product
          </Button>
        </Stack>
      </Stack>
    </Flex>
    </>
  )
}

export default AddNewJuicer