import React from 'react'
import {
  Box,
  Container,
  // Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,Image
} from '@chakra-ui/react';
import {Link} from "react-router-dom";

const ListHeader = ({ children }) => {

  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {

  const handleGooglePlay=()=>{
    window.location.href="https://play.google.com/store/apps?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-ap-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700064490253544_creativeid_480915691381_device_c&gclid=CjwKCAiA7vWcBhBUEiwAXieItjsIbvXc2vkle9JUNec1YcoP7WRAMxCVa9n6K6EbJredAoIftdFBDxoCt1UQAvD_BwE&gclsrc=aw.ds&pli=1";
  }
  
  const handleAppleStore=()=>{
    window.location.href="https://www.apple.com/in/store";
  }
  return (
    <Box
      bg="rgb(0,51,128)"
      color="white">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>PRODUCT CATEGORIES</ListHeader>
            <Link href={'#'} _hover={{color:"red"}} style={{color:"white"}}>Smartphones</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'} style={{color:"white"}}>Laptop</Link>
            </Stack>
            <Link href={'#'} style={{color:"white"}}>Televisions</Link>
            <Link href={'#'} style={{color:"white"}}>Air Condition</Link>
            <Link href={'#'} style={{color:"white"}}>Refrigerators</Link>
            <Link href={'#'} style={{color:"white"}}>Accessories</Link>
            <Link href={'#'} style={{color:"white"}}>Personal Care & Grooming</Link>
            <Text fontWeight={"bolder"}>FOLLOW US</Text>
            <Flex gap={"5px"}>
            <Image w="30px" h="30" borderRadius={"60px"}
            src="data:image/jpeg;base64,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" alt="google_play"/>
             <Image w="30px" h="30" borderRadius={"60px"}
            src="data:image/png;base64,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" alt="App_Store"/>
             <Image w="30px" h="30" borderRadius={"50px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9qk_s9xzSCDpSqFvP9Yx4Mdv2XMeiz1oXkFkKsiCsCGtgpuhAOMEHOGf4Z7PRzVAoAA&usqp=CAU" alt="App_Store"/>
            </Flex>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>SITE INFO</ListHeader>
            <Link href={'#'} style={{color:"white"}}>About R Mart</Link>
            <Link href={'#'} style={{color:"white"}}>ResQ Services</Link>
            <Link href={'#'} style={{color:"white"}}>Site Map</Link>
            <Link href={'#'} style={{color:"white"}}>Gift Cards</Link>
            <Link href={'#'} style={{color:"white"}}>Corporate Enquire</Link>
            <Link href={'#'} style={{color:"white"}}>Contact Us</Link>
            <Link to="/admin" style={{color:"white"}}>Admin Page</Link>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resource Center</ListHeader>
            <Link href={'#'} style={{color:"white"}}>Product Reviews</Link>
            <Link href={'#'} style={{color:"white"}}>Buying Guides</Link>
            <Link href={'#'} style={{color:"white"}}>How tos</Link>
            <Link href={'#'} style={{color:"white"}}>Featured Stories</Link>
            <Link href={'#'} style={{color:"white"}}>Events & Happenings</Link>
            <Image w="100px" onClick={handleGooglePlay}
            src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="google_play"/>
             <Image w="100px" onClick={handleAppleStore}
            src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="App_Store"/>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Policies</ListHeader>
            <Link href={'#'} style={{color:"white"}}>Terms of Use</Link>
            <Link href={'#'} style={{color:"white"}}>FAQs</Link>
            <Link href={'#'} style={{color:"white"}}>Cancellation and Return Policy</Link>
            <Link href={'#'} style={{color:"white"}}>Pricing & Payment Policy</Link>
            <Link href={'#'} style={{color:"white"}}>Shipping & delivery Policy</Link>
            <Link href={'#'} style={{color:"white"}}>Privacy Policy</Link>
            <Link href={'#'} style={{color:"white"}}>E-Waste Recycling Policy</Link>
            <Link href={'#'} style={{color:"white"}}>EMI and Additional Cashback T&C</Link>
            <Link href={'#'} style={{color:"white"}}>RelianceOne Loyalty Programme T&C</Link>
            <Link href={'#'} style={{color:"white"}}>Caution Notice</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
           
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
 <Text pt={-64} fontSize={'sm'} textAlign={'center'}>
        EXPERIENCE RELIANCE DIGITAL APP ON MOBILE
        </Text>
         
        </Flex>
       
      </Box>
    </Box>
  )
}

export default Footer;