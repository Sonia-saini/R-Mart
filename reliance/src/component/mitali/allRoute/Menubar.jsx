import React from 'react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {Box, color, Text} from '@chakra-ui/react'
import { Link} from 'react-router-dom'
import './Menubar'

const Menubar = () => {

  return (
    <div >
         <Box className='navbar' _hover={{color:"white",cursor:"pointer"}}>
            <Link to="/iron">
         <Text fontSize={"sm"} _hover={{color:"white",cursor:"pointer"}}>IRON</Text>
       <ChevronDownIcon marginTop={'4%'} marginLeft={'0.5rem'} />
       </Link>
       <Link to="/computers">
       <Text fontSize={"sm"}>COMPUTERS</Text>
       <ChevronDownIcon marginTop={'4%'} marginLeft={'0.5rem'} />
       </Link>
       <Link to="/juicers" >
       <Text fontSize={"sm"}>JUICES</Text>
       <ChevronDownIcon marginTop={'4%'} marginLeft={'0.5rem'} />
       </Link>
       <Link to="/makeup">
       <Text fontSize={"sm"}>MAKEUP</Text>
       <ChevronDownIcon marginTop={'4%'} marginLeft={'0.5rem'} />
       </Link>
       <Link to="/mobiles">
       <Text fontSize={"sm"}>MOBILE</Text>
       <ChevronDownIcon marginTop={'4%'} marginLeft={'0.5rem'} />
       </Link>
       <Link to="/cameras">
       <Text fontSize={"sm"}>CAMERAS</Text>
       <ChevronDownIcon marginTop={'4%'} marginLeft={'0.5rem'} />
       </Link>
       </Box>
    </div>
  )
}

export default Menubar