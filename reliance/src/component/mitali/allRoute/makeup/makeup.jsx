import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import "./makeup.css"
import { Card, CardBody,Heading,Box,Checkbox,Text ,Image,Skeleton, Stack,CloseButton} from '@chakra-ui/react'
import { Search2Icon ,ChevronDownIcon} from '@chakra-ui/icons'
import { AiFillStar,AiOutlineHeart } from "react-icons/ai"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from '../nav'
import {getPosts,updatePosts} from '../../api/api.action';
import axios from 'axios';


const Makeup = () => {
    let posts= useSelector((store)=>store.postsManager.posts)
    let loading = useSelector((store)=>store.postsManager.loading)
    let datas = useSelector((store)=>store.postsManager.datas)
    let [texts, setText] = useState('')

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
        <Checkbox >Mitali sinha </Checkbox>
        <Checkbox >Mitali sinha </Checkbox>
        <Checkbox >Mitali sinha </Checkbox>
        <Checkbox >Mitali sinha </Checkbox>
        <Checkbox >Mitali sinha </Checkbox>
      </Box>
    </Card>
     </Box>
<Box className='m-right'>
  {/* ui right heading */}
  <Card className='m-heading' bg={'whiteAlpha.900'}>
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
         <Card className="wishList">
         <Checkbox >Compare </Checkbox>
         </Card>
         <Card className="wishList">
           <Text style={{width:"25%"}}>
           <AiOutlineHeart color='red' size="95%" width="40%"/>
           </Text>
           <Text style={{width:"75%", marginLeft:"25%", marginTop:"-25%"}}  >Wish List</Text>
         </Card>
        </Box>
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
