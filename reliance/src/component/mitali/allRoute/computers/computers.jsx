import React from 'react'
import { useEffect , useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import "./computers.css"
import { Card, CardBody,Heading,Box,Checkbox,Text ,Image,Skeleton, Stack,CloseButton, useDisclosure,
  Modal, ModalContent,ModalBody,ModalCloseButton,ModalFooter,ModalHeader,Button,Input,useToast} from '@chakra-ui/react'
import { Search2Icon ,ChevronDownIcon} from '@chakra-ui/icons'
import { AiFillStar,AiOutlineHeart,AiFillHeart } from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from '../../../Saurabh/Navbar';
import {getPostsComputers,updatePosts} from '../../api/api.action';
import { Link } from 'react-router-dom';
import Menubar from '../Menubar';
import { addtocart } from '../../../sanket/cart/redux/actions';



export const Computers = () => {
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
        dispatch(getPostsComputers())
      }, []);

// slider images and settings 

      const data=[
        {
            id:1,
            img:"https://www.reliancedigital.in/medias/Zebronics-Monitors-CLP-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzgzMDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGY1L2g3ZC85ODc2NzgyMjUyMDYyLmpwZ3w5ZDk0ZDNlZDI3M2I2Y2E1N2U3MjdkZDFhY2EzMTNjODEwNDRhNTQ5MWViM2U1MmM5MGY1YzU1ZmIxNjI0ZGU4"
    
        },
    {
        id:2,
        img:"https://www.reliancedigital.in/medias/acer-Monitor-D-20-05-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDYyNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2hmMC85ODc2NzgyMzgzMTM0LmpwZ3xjNWJiMWM1NGY5ZDE0ZmFiYWFiODUxOGYxMmE2MGI5ODIzNDZhNDIxZDRmYzAyNDNiYzRmMWU4ZDM5Y2JmYzIz"
    },
        {
            id:3,
            img:"https://www.reliancedigital.in/medias/ViewSonic-Monitors-CLP-Banner-05-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNzQxMTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDcwL2hhMy85ODU3NTEyODMzMDU0LmpwZ3xmMzI0NjQ3NmFiYjk0MDZjOTUwY2ZiMGU3MTFkZDk4YTgwMDAyNmJkNGZmYzlhZTYwMmJhZjhiZWI1OWVmYmI0"
        },
    
        {
            id:4,
            img:"https://www.reliancedigital.in/medias/TUF-Gaming-VG259QR-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3w5NDAwMnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDliLzk4NjAwNjQ5Njg3MzQuanBnfDk4NDAxMTYyMjc0ODNkOTAzZjZjNTlkYTQ2MjYwYWIwMDIxNGIwZTliNjkwM2I0MjI3MTE4NDQyNjIyZGZiMmU"
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
      dispatch(getPostsComputers())
     posts.sort((a,b)=>{
      return Number(a.price)-Number(b.price);
     })
     dispatch(updatePosts(posts))
    }

    let desc=()=>{
      dispatch(getPostsComputers())
      posts.sort((a,b)=>{
        console.log(a.price)
        return Number(b.price) - Number(a.price)
      })
      dispatch(updatePosts(posts))
    }
    let filter=(txt)=>{
     
      dispatch(getPostsComputers())
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
                  COMPUTERS
            </Heading>
            <Text >(showing items total of 15)</Text>
        </Box>
        <Box display={{lg:"flex",sm:"grid",md:"grid"}}>
            <Text >Sort By : </Text>
            <Text className='text' onClick={asc}>Price(Low-High) </Text>
            <Text className='text' onClick={desc}>Price(High-Low)</Text>
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

