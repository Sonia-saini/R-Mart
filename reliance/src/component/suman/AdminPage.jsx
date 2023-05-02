import React,{ReactNode} from 'react'
import { AppContest } from './authContext/AuthContextProvider';
import { Link } from 'react-router-dom';
import {
 Heading,Stack,GridStack,Flex,Text,Button,
} from '@chakra-ui/react';


import AdminNavbar from './AdminNavbar';


const AdminPage = () => {
 

  return (
    <>

 
<AdminNavbar/>

<Flex justifyContent="center">
<Link to="/newmobileadd">
  <Button mt="20px" ml="10px">Add New Mobiles Product</Button>
  </Link>

  <Link to="/newmakeupadd">
  <Button mt="20px" ml="10px">Add New MakeUp Product</Button>
  </Link>
</Flex>

<Flex justifyContent="center">
  <Link to="/newironadd">
<Button mt="20px" ml="10px">Add New Iron Product</Button>
</Link>

<Link to="/newjuiceradd">
<Button mt="20px" ml="10px">Add New Juicers Product</Button>
</Link>
  </Flex>
  
<Flex justifyContent="center">
  <Link to="/newcomputeradd">
  <Button mt="20px" ml="10px">Add New Computer Product</Button>
</Link>

</Flex>

   
    </>
  )
}

export default AdminPage;
