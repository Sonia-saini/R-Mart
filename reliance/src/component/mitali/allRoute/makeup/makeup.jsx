import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import "./makeup.css"
import { Card, CardBody,Heading,Box,Checkbox,Text ,Image,Skeleton, Stack,CloseButton, useDisclosure,
  Modal, ModalContent,ModalBody,ModalCloseButton,ModalFooter,ModalHeader,Button,Input,useToast} from '@chakra-ui/react'
import { Search2Icon ,ChevronDownIcon} from '@chakra-ui/icons'
import { AiFillStar,AiOutlineHeart ,AiFillHeart} from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from '../../../Saurabh/Navbar';
import {getPosts,updatePosts} from '../../api/api.action';
import { Link } from 'react-router-dom';
import Menubar from '../Menubar';



 const Makeup = () => {
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
   //console.log('data',datas)
  
    useEffect(() => {
        dispatch(getPosts())
      }, []);


      const data=[
        {
            id:1,
            img:"https://www.reliancedigital.in/medias/Philips-Straightening-Brush-CLP-Banner-09-04-2021.jpg?context=bWFzdGVyfGltYWdlc3wyMTI5NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDk4L2hlYi85NTE4NzMzNzIxNjMwLmpwZ3xhMmI5MDI0YTVjOWU4YTk4NTI4NzI2OTU4NDliZTRjNDM5ZDRkMWVlMTFiOWZmOTIwOGFjNDMxZDc4ZTZkN2Nk"
    
        },
    {
        id:2,
        img:"https://www.reliancedigital.in/medias/Style-By-Panasonic-Women-CLP-Banner-22-03-2021.jpg?context=bWFzdGVyfGltYWdlc3wxMzA2MDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDAwL2gwYS85NTAwNzg0MDMzODIyLmpwZ3wwYzNkYzBmNDBiNjlkYzMyM2YwOTA3ZWFiYjE4OGQyNTAyNThmN2FmMjRkYzQ0OGE4NTM3YWZjOWI1NGZlZjgx"
    },
        {
            id:3,
            img:"https://www.reliancedigital.in/medias/HC4045-1365-x-260.jpg?context=bWFzdGVyfGltYWdlc3wyNTIyNTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA3L2g5Yy85NTE1OTExNzQxNDcwLmpwZ3wzMjBjMTQ4ZmI0ZmNjZWQ1NjM5ODNlZTI1YzNmMGZiODM5ZTcyMzk5Y2ExODZhZjRlZWQzYjA2NzcxM2M0MzBh"
        },
    
        {
            id:4,
            img:"https://www.reliancedigital.in/medias/1365x260-Range-AP.JPG?context=bWFzdGVyfGltYWdlc3w3NDE4NnxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaGJiLzkzODY3MzIxMjYyMzguanBnfDczOGNlYWJhNDA2YTYxYzU3ZDMxYzg4NzE1YzgyYzZmYTMyMmZmZDkwZDQzZDFiZDI4ZWE5ZWUwMGZkNzE0OTU"
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
      dispatch(getPosts())
     posts.sort((a,b)=>{
      return (a.price)-(b.price);
     })
     dispatch(updatePosts(posts))
    }

    let desc=()=>{
      dispatch(getPosts())
      posts.sort((a,b)=>{
        return (b.price) - (a.price)
      })
      dispatch(updatePosts(posts))
    }
    let filter=(txt)=>{
     
      dispatch(getPosts())
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
                  <Search2Icon/>
            </CardBody>
      </Box>
      <Box className='checkbox'mt="-2rem">
      <Checkbox onChange={()=>{filter('Usha')}}>Usha </Checkbox>
      <Checkbox onChange={()=>{filter('Philips')}}>Philips </Checkbox>
      <Checkbox onChange={()=>{filter('Kelvinator')}}>Kelvinator </Checkbox>
      <Checkbox onChange={()=>{filter('BPL')}}>BPL </Checkbox>
      </Box>
    </Card>
    {/* filter by price and discount */}
    <Card className='brand' bg={'whiteAlpha.900'}>
      <Box display='flex'>
          <CardBody>
                  discount
            </CardBody>
            <CardBody>
                  <Search2Icon/>
            </CardBody>
      </Box>
      <Box className='checkbox'mt="-2rem">
      <Checkbox onClick={()=>{filter('Usha')}}>20% - 25% </Checkbox>
        <Checkbox onClick={()=>{filter('Philips')}}>25% - 30%</Checkbox>
        <Checkbox onClick={()=>{filter('Kelvinator')}}>30% - 35% </Checkbox>
        <Checkbox onClick={()=>{filter('BPL')}}>35% - 40% </Checkbox>
      </Box>
    </Card>
     </Box>
<Box className='m-right'>
  {/* ui right heading */}
  <Card className='m-heading' bg={'whiteAlpha.900'}padding="10px" fontSize={"15"}>
      <CardBody className="m-head">
        <Box>
            <Heading size='x' textStyle='h5'>
                  MAKE UP
            </Heading>
            <Text >(showing items total of 15)</Text>
        </Box>
        <Box style={{display:"flex"}}>
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
       <Image src={post.url} alt={post.price}className="image"/>
       <Box style={{height:'40%'}}>
           <Text style={{height:"40%", overflow:"hidden",textOverflow: "ellipsis"}}>{post.title}</Text>
           <Text textAlign={'center'}>&#8377; {post.price}</Text>
           <Text style={{display:"flex", marginLeft:"30%"}}>{post.rating? star(post.rating) : ""}</Text>
           <Box className='offers'>OFFERS AVAILABLE</Box>
       </Box> 
       <Box style={{display:"flex", height:"10%"}}>
         <Card className="wishList" onClick={()=>{addToCart(post.id)}}>
         <Text style={{width:"25%"}} className="cart">
           <FaCartArrowDown color='green' size="95%" width="40%" />
           </Text>
           <Text style={{width:"75%", marginLeft:"25%", marginTop:"-25%"}}>Add</Text>
         </Card>
         <Card className="wishList" onClick={onOpen}>
           <Text style={{width:"25%"}}>
           <AiOutlineHeart color='red' size="95%" width="40%"/>
           </Text>
           <Text style={{width:"75%", marginLeft:"25%", marginTop:"-25%"}}>Wish List</Text>
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
export default Makeup