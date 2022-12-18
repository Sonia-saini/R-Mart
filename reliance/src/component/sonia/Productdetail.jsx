
import React, { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { Box, Heading, Stack,Image, Input,Button } from '@chakra-ui/react'
import { addtocart } from '../sanket/cart/redux/actions';
import { Fade, ScaleFade, Slide, SlideFade,Collapse } from '@chakra-ui/react'
import Navbar from '../Saurabh/Navbar';
import Menubar from '../mitali/allRoute/Menubar';
function Productdetail() {
    const [show, setShow] = React.useState(false)
    const [input,setInput]=useState("");
    const {data}=useSelector((state)=>state.data)
    const {items}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const handleToggle = () => setShow(!show)
    console.log(items)
   
    
  return (
  <>
  <Navbar/>
  <Menubar/>
    <Box w="100%" display={{base:"grid",md:"flex",sm:"grid"}} gap={20} m={"auto"} p="10px">

<Box w={"100%"} margin="auto"   border={"10px dashed #1a237e"} borderRadius="27px" >
    <Image src={data.url} w={{md:"80%",base:"50%",sm:"auto"}} alt="" m={"auto"} borderRadius="15px"/>
</Box>
<Box w={"100%"} p={3}>
    <Heading fontSize={22} mb={10}>{data.name}
    &nbsp;<Button size='sm'  color="blue"onClick={handleToggle} bgColor="transparent" border={"none"}>
         {show ? '...Read Less' : 'Read More...'}
      </Button></Heading>
 
      <Collapse startingHeight={{base:"none",md:100,sm:50,lg:1000}} in={show}>
      <Stack w="100%" direction={"flex"} gap="20px" > <Stack  w={"100%"} borderLeft="1px dashed gray" borderTop={"1px dashed gray"} p={10}>

<Box fontSize={13}>
<Heading fontSize={17} mb={3}>Gain more with offers (2)</Heading>
<ul style={{marginLeft:"15px"}}>
    <li >
    7.5% Instant Discount (Max 5000) with Citibank Credit/Debit Cards & EMI transactions. Read T&C
    </li>
    <li>Get Cashback upto Rs. 1,000 on Mobikwik Wallet. Read T&C</li>
</ul></Box>
<Box fontSize={13} mt={8}>
<Heading fontSize={17} mb={3}>Save more with EMI/Cashback (4)</Heading>
<ul style={{marginLeft:"15px"}}>
    <li >
    Credit Card No-Cost EMI Options.
    </li>
    <li>Debit Card No-Cost EMI Options.</li>
    <li>Credit Card Low-Cost EMI Options.</li>
    <li>EMIs (Credit Cards) from ₹1391.89/month</li>
    </ul></Box>
<Box fontSize={13} mt={8}>
<Heading fontSize={17} mb={3}>Warranty</Heading>
<ul style={{marginLeft:"15px"}}><li>1 Year manufacturer warranty</li></ul>
</Box>
<Box fontSize={13} mt={8}>
<Heading fontSize={17} mb={3}>Product features</Heading>
<ul style={{marginLeft:"15px"}}><li>
Processor AMD Ryzen 3 3250 RAM- 8 GB Internal Storage- 256 GB Storage Type- SSD
</li></ul>
</Box>
<Box  fontSize={13} mt={8}>
<Heading fontSize={17} mb={3}>Return Policy</Heading>  
<ul style={{marginLeft:"15px"}}>
    <li >
    Items are eligible for return within 7 Days of Delivery. Read T&C
    </li>
    <li>All accessories, product & packaging need to be returned in original condition.</li>
</ul>
</Box>
    </Stack>
    
    </Stack>
      </Collapse>
      
    <Stack p={10} margin="auto" border="1px dashed gray"borderTop={"1px dashed gray"} w={"full"}>
 <Box>  <p fontSize={17}>Deal Price:<b style={{color:'blue',fontSize:"30px"}}> ₹{data.price.toLocaleString()}</b></p>
    <p fontSize={17}>M.R.P :<b style={{fontSize:"16px",textDecoration:"line-through"}}> ₹{(data.price+(data.price*5)/100).toLocaleString()}</b> (Inclusive of all taxes)</p>
    <p fontSize={17} style={{color:"16px"}}>You Save :{(data.discount?data.discount: 5).toLocaleString()}%<b style={{fontSize:"16px"}}> (₹{((data.price*(data.discount?data.discount: 5))/100).toLocaleString()})</b></p>
  <p>  EMIs (Credit Cards) from ₹{((data.price*3)/100)+((data.price*4)/100).toLocaleString()}/month</p>
  <Heading fontSize={17} mt={5}>FREE Shipping!</Heading>
    </Box> 
 <Box> <Box>  <Input placeholder={"ENTER PINCODE"} maxLength="6" onChange={(e)=>setInput(e.target.value)} name="name"border="2px solid blue" autoComplete='off' 
 />
 <label for="name" class ="input-lable" />
 </Box>
 {
    input&&input.length===6?
 <> <Box display="flex"fontSize={12.5}>  <Image src='https://www.reliancedigital.in/build/client/images/standard_delivery_icon.png' w={"25px"}/><p>Standard Delivery: ( Within Next three working days)</p></Box>
 <p style={{color:'green',fontSize:"12px"}}>COD not available</p>
 <p style={{color:'blue',fontSize:"13px"}}>*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</p>
 </>:""
}

 </Box>
 <Stack direction={"flex"} justifyContent="space-between" mt={10} w="100%"><Button borderRadius={0} bg={"red.500"} _hover={{bg:"blue.700"}} color="white" w="48%" onClick={()=>dispatch(addtocart({...data,quantity:1}))}>ADD TO CART</Button>
<Button bg={"orange.500"} color="white" _hover={{bg:"orange.500"}} w="48%" borderRadius={0}>BUY NOW</Button></Stack>
    </Stack>
    </Box>
</Box>
    
</>  
  )
}

export default Productdetail