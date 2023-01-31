import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import "./mobiles.css"
import { Card, CardBody,Heading,Box,Checkbox,Text ,Image,Skeleton, Stack,CloseButton, useDisclosure,
  Modal, ModalContent,ModalBody,ModalCloseButton,ModalFooter,ModalHeader,Button,Input,useToast} from '@chakra-ui/react'
import { Search2Icon ,ChevronDownIcon} from '@chakra-ui/icons'
import { AiFillStar,AiOutlineHeart,AiFillHeart } from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from '../../../Saurabh/Navbar';
import { Link } from 'react-router-dom';
import {getPostsMobile,updatePosts} from '../../api/api.action';
import Menubar from '../Menubar';
import { addtocart } from '../../../sanket/cart/redux/actions';



const Mobiles = () => {
    let posts= useSelector((store)=>store.postsManager.posts)
    let loading = useSelector((store)=>store.postsManager.loading)
    let datas = useSelector((store)=>store.postsManager.datas)
   let [texts, setText] = useState('')
   let [cart, setCart] = useState([])
    let[wish, setWish] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const dispatch = useDispatch()
    console.log("p",posts)
    if(!datas[0]){
      datas=posts
    }
  
    useEffect(() => {
        dispatch(getPostsMobile())
      }, []);

// slider images and settings 

      const data=[
        {
            id:1,
            img:"https://www.reliancedigital.in/medias/1365-260-JUICER.jpg?context=bWFzdGVyfGltYWdlc3wyMjM5Nzh8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2g4MC85ODU4MjY4MjAwOTkwLmpwZ3wzZDgyODNhYzdkMGUzZDhkMDY4MjIwMWZkMmU4MzdhMDlhZWQ5MzRjZDNiNzgwZmM1NmJjYTg1NTIxZjFmM2U2"
    
        },
    {
        id:2,
        img:"https://www.reliancedigital.in/medias/Reliance-digital-Banner-Kriti-01.jpg?context=bWFzdGVyfGltYWdlc3wxMDU1MTB8aW1hZ2UvanBlZ3xpbWFnZXMvaDRlL2hkNi85ODU4MjY4MDY5OTE4LmpwZ3w2MTY1NGE1ODA3NWIwNDZlNjQ5ZDc1NGY2ODRlMjUxYTk1MGFlNDQ0YjkxYzVjNjkzYjU3OWY3ZWZjNjdhMTI2"
    },
        {
            id:3,
            img:"https://www.reliancedigital.in/medias/Philips-Juicer-Mixer-Grinder-CLP-Banner-09-04-2021.jpg?context=bWFzdGVyfGltYWdlc3wxNjIwMDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU1L2gyMy85NTE4NzM2MDE1MzkwLmpwZ3wxZTdmY2E0MTFlZTI1YzFjNmE4YTA0NWU2NDFiMzM4MGZmYzE2OTM5OTQ4NmVhZWM0MmM1ZjcwMjUxYmI3Nzgy"
        },
    
        {
            id:4,
            img:"https://www.reliancedigital.in/medias/Havells-Stilus-Juicer-Mixer-Grinder-CLP-Banner-13-04-2021.jpg?context=bWFzdGVyfGltYWdlc3wxMDg2NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGQwL2hkYy85NTE5MDMyOTI2MjM4LmpwZ3w2MWFmYzZhZGZlNTE1ZWJjNmUzYTY3YmYwZWMyYzhlZmM4OGUyNzY0YTg5YmU3MTVlMDIyMzEzYjEwM2E5MmMz"
        }
    ]

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

// converting number of ratings into stars to show in ui
    let star=(n)=>{
      if(n>=0 && n <= 1.4){
        <AiFillStar color="gold" size="1.5rem" />
      }else if(n>=1.5 && n <= 2.4){
         return<>
         <AiFillStar color="gold" size="1.5rem" />
         <AiFillStar color="gold" size="1.5rem" />
         </>
      }else if(n>=2.5 && n <= 3.4){
        return<>
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        </>
      }else if(n>=3.5 && n <= 4.4){
        return<>
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        </>
      }else{
        return<>
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        <AiFillStar color="gold" size="1.5rem" />
        </>
      }
    }
    let asc=()=>{
      dispatch(getPostsMobile())
     posts.sort((a,b)=>{
      return (a.price)-(b.price);
     })
     dispatch(updatePosts(posts))
    }

    let desc=()=>{
      dispatch(getPostsMobile())
      posts.sort((a,b)=>{
        return (b.price) - (a.price)
      })
      dispatch(updatePosts(posts))
    }
    let filter=(txt)=>{
     
      dispatch(getPostsMobile())
        let datas=[];
        posts.map((d)=>{
          if(d.comp===txt){
            datas= [...datas,d]
          }
        })
      
      dispatch(updatePosts(datas))
      setText(txt)
    }
    let filterBack=(txt)=>{
      setText('');
      dispatch(updatePosts(posts))
    }
    let addToCart=(ind,st)=>{
      posts.map((el)=>{
         if(el.id===ind){
          setCart([...cart,el])
         }
      })
     }
    
     localStorage.setItem('carts',JSON.stringify(cart))
    
     let wishList=(ind)=>{
      posts.map((el)=>{
        if(el.id===ind){
          setWish([...wish,el])
        }
      })
     
    return (
      toast({
        title: 'wish added to list.',
        description: "you can see your list in wishList section",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    )
     }
     localStorage.setItem('wish', JSON.stringify(wish))
    
// if page loads show skeleton
  if(loading){
   return <Stack>
    <Skeleton height='14vh' />
    <Skeleton height='14vh' />
    <Skeleton height='14vh' />
    <Skeleton height='14vh' /><Skeleton height='14vh' /><Skeleton height='14vh' />
  </Stack>
  }

  return (
    <>
    <Navbar/>
    <Menubar/>
    {/* ui slider part */}
    <Slider {...settings}>
        {
            data.map((item)=>(
              <div key={item.id}>
        <img 
        src={item.img} alt="head"/>
              </div>
            ))
        }
    </Slider>
    
    <div style={{display:"flex"}}>   
    {/* ui left part */}
    <Box className="m-left"> 

     {/* filter   feading    */}
      <Card className='filter'  bg={'whiteAlpha.900'} w={[100, 150,200 ,300]}>
        <CardBody>
          <Heading size='x' textTransform='uppercase' textStyle='h5'>
                Filters
          </Heading>
        </CardBody>
      </Card>

     {/* filter by brand */}
    <Card className='brand'  bg={'whiteAlpha.900'}>
      <Box display='flex'>
          <CardBody>
                  Brand
            </CardBody>
            <CardBody>
                  <Search2Icon display={{base:"none"}}/>
            </CardBody>
      </Box>
      <Box className='checkbox'mt="-2rem"  ml={{base:"-30px",lg:"-10px"}}>
      <Checkbox onChange={()=>{filter('Usha')}}>Usha </Checkbox>
      <Checkbox onChange={()=>{filter('Philips')}}>Philips </Checkbox>
      <Checkbox onChange={()=>{filter('Kelvinator')}}>Kelvinator </Checkbox>
      <Checkbox onChange={()=>{filter('BPL')}}>BPL </Checkbox>
      </Box>
    </Card>
    {/* filter by price and discount */}
    <Card className='brand' bg={'whiteAlpha.900'} fontSize={{lg:"15px",md:"12px",sm:"10px"}}>
      <Box display='flex'>
          <CardBody>
                  discount
            </CardBody>
            <CardBody>
                  <Search2Icon display={{base:"none"}}/>
            </CardBody>
      </Box>
      <Box className='checkbox'mt="-2rem" fontSize={{lg:"15px",md:"12px",sm:"10px",base:"10px"}} ml={{base:"-30px",lg:"-10px"}}>
      <Checkbox onClick={()=>{filter('Usha')}}>20% - 25% </Checkbox>
        <Checkbox onClick={()=>{filter('Philips')}}>25% - 30%</Checkbox>
        <Checkbox onClick={()=>{filter('Kelvinator')}}>30% - 35% </Checkbox>
        <Checkbox onClick={()=>{filter('BPL')}}>35% - 40% </Checkbox>
      </Box>
    </Card>
     </Box>
<Box className='m-right' fontSize={{lg:"15px",md:"12px",sm:"10px",base:"10px"}}>
  {/* ui right heading */}
  <Card className='m-heading' bg={'whiteAlpha.900'}>
      <CardBody className="m-head">
        <Box>
            <Heading size='x' textStyle='h5'>
                  MOBILE
            </Heading>
            <Text >(showing items total of 15)</Text>
        </Box>
        <Box display={{lg:"flex",sm:"grid",md:"grid"}}>
            <Text >Sort By : </Text>
            <Text className='text' onClick={asc}>Price(Low-High) </Text>
            <Text className='text'onClick={desc}>Price(High-Low)</Text>
        </Box>
      </CardBody>
  </Card>
  <Card style={{marginTop:"1rem", textAlign:"start"}}  bg={'whiteAlpha.900'}>
  <CardBody style={{display:"flex", }}>
        <Box>Filter :</Box>
        <Box style={{marginLeft:"4rem",}}>
        <Box style={{display:"flex", }}><Text>{texts}</Text>{texts && <CloseButton onClick={()=>{filterBack({texts})}}/>}</Box>
        </Box>
        <Link className='Wish'to="/wish" style={{marginLeft:"70%"}}>
        <AiFillHeart color='red' size="40%"/>
        </Link>
      </CardBody>
  </Card>
 {/* ui fetched data */}
    {!loading &&
    <Box className="details">
    {datas.map((post) => (
      <Card key={post.id}  bg={'whiteAlpha.900'}>
       <Image src={post.url} alt={post.price}className="image" w="100%"/>
       <Box style={{height:'40%'}}>
           <Text style={{height:"40%", overflow:"hidden",textOverflow: "ellipsis"}}>{post.name}</Text>
           <Text>&#8377; {post.price}</Text>
           <Text style={{display:"flex",marginLeft:"30%"}}>{post.rating? star(post.rating) : ""}</Text>
           <Box className='offers'>OFFERS AVAILABLE</Box>
       </Box> 
       <Box style={{display:"flex", height:"10%"}}>
         <Card className="wishList" onClick={()=>{addToCart(post.id)}} p="10px">
         <Text style={{width:"25%"}} className="cart">
           <FaCartArrowDown color='green' size="95%" width="100%" />
           </Text>
           <Text style={{width:"75%", marginLeft:"25%", marginTop:"-22px"}} onClick={()=>dispatch(addtocart({...post,quantity:1}))}>Add</Text>
         </Card>
         <Card className="wishList" onClick={onOpen}>
           <Text style={{width:"25%"}}>
           <AiOutlineHeart color='red' size="95%" width="100%"/>
           </Text>
           <Text style={{width:"75%", marginLeft:"25%", marginTop:"-22px"}}>Wish List</Text>
         </Card>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Add Your Product Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={()=>{wishList(post.id)}}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Card>
     ))}
   </Box>  
  
    }
    
</Box>
</div>
    </>
  )
}

export default Mobiles
