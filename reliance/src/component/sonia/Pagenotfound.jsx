import React from 'react'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Link } from 'react-router-dom'
function Pagenotfound() {
  return (
    <div>
     <Link to="/" ><Button display={"block"} margin="auto" borderRadius={0} bg={"red.500"} _hover={{bg:"blue.700"}} w="auto"color="white" mt={"30px"}  >GO TO HOME</Button></Link> 

       <Image src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.gif" w="70%" m="auto" /> 
    </div>
  )
}

export default Pagenotfound