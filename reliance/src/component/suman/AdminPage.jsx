import React from 'react'
import { AppContest } from './authContext/AuthContextProvider';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  // HStack,
  Avatar,
  // AvatarBadge,
  // IconButton,
  Center,Text,
  GridItem,Select
} from '@chakra-ui/react';
// import { SmallCloseIcon } from '@chakra-ui/icons';
import axios from "axios";


const AdminPage = () => {
  const {authState,logoutUser}=React.useContext(AppContest);

  const [img,setImg]=React.useState("")
const [title,setTitle]=React.useState("")
const [price,setPrice]=React.useState()
const [description,setDescription]=React.useState("")
const [category,setCategory]=React.useState("");
const [rating,setRating]=React.useState("")

const getData=()=>{
  return axios({
      method:"POST",
      url:"",
      data:{img,title,price,description,category,rating}
  })
}

const handleAddProduct=()=>{
  getData()
  .then((res)=>{
    console.log(res.data)
    alert("Product added successfully")
  })
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
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
         Add New Product
        </Heading>
        <FormControl id="userName">
          <FormLabel>Admin Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="2xl" src="https://ca.slack-edge.com/T049JC010P9-U04ANG3QWJ2-62ad89db213e-512">
                {/* <AvatarBadge
                   as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                   colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                /> */}
              </Avatar>
            </Center>
            <Center w="full">
              <Text w="full">Token: {authState.token}</Text>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="url" isRequired>
          <FormLabel>URL</FormLabel>
          <Input value={img} onChange={(e)=>setImg(e.target.value)}
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

        <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Category
        </FormLabel>
        <Select value={category} onChange={(e)=>setCategory(e.target.value)}
          id="category"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option value="Accessories">Accessories</option>
          <option value="Accessories">Home</option>
          <option value="Accessories">Mobile</option>
        </Select>
      </FormControl>

        <Stack spacing={6} direction={['column', 'row']}>
        <Link to="/adminpage">
          <Button onClick={logoutUser}
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
          Logout
          </Button>
          </Link>
          <Button  onClick={handleAddProduct}
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Add Product
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default AdminPage;
