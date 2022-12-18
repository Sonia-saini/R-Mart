import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import "./Iron.css"
import { Card, CardBody,Heading,Box,Checkbox,Text ,Image,Skeleton, Stack, CloseButton} from '@chakra-ui/react'
import { Search2Icon ,ChevronDownIcon} from '@chakra-ui/icons'
import { AiFillStar,AiOutlineHeart } from "react-icons/ai"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from '../Menubar'
import {getPostsIron,updatePosts} from '../../api/api.action';



export const Iron = () => {
    let posts= useSelector((store)=>store.postsManager.posts)
    let loading = useSelector((store)=>store.postsManager.loading)
    let datas = useSelector((store)=>store.postsManager.datas)
    let [texts, setText] = useState('')

    const dispatch = useDispatch()
    console.log("p",posts)
    if(!datas[0]){
      datas=posts
    }
  
    useEffect(() => {
        dispatch(getPostsIron())
      }, []);

 
   //  console.log("data",datas)
// slider images and settings 

      const data=[
        {
            id:1,
            img:"https://www.reliancedigital.in/medias/Panasonic-Iron-CLP-Banner-22-03-2021.jpg?context=bWFzdGVyfGltYWdlc3wxMTE0Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDkxL2g1OS85NDk5MzE5Njk3NDM4LmpwZ3wxZThkYmMyMzNlMzFjOTJlMDBlMDZiNWFjNjc0OTI0ZTk5Zjc1ODkzMDBlOGE3NzhiNTZmMjYwYTY1YTI1MmU2"
    
        },
    {
        id:2,
        img:"https://www.reliancedigital.in/medias/Havells-Insta-Dry-Iron-CLP-Banner-13-04-2021.jpg?context=bWFzdGVyfGltYWdlc3wzMzQ0MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDg0L2gxYS85NTE5MDM0MDQwMzUwLmpwZ3xmMTA1ZDRjYTg3YWUxODhjM2EwMWNmNmUzZGEwNTJiNjZhZDZjY2U0YTI1Mjc0OWI4OGIwMDFlMTM1NzMzYmQ4"
    },
        {
            id:3,
            img:"https://www.reliancedigital.in/medias/Havells-Insta-Dry-Iron-CLP-Banner-13-04-2021.jpg?context=bWFzdGVyfGltYWdlc3wzMzQ0MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDg0L2gxYS85NTE5MDM0MDQwMzUwLmpwZ3xmMTA1ZDRjYTg3YWUxODhjM2EwMWNmNmUzZGEwNTJiNjZhZDZjY2U0YTI1Mjc0OWI4OGIwMDFlMTM1NzMzYmQ4"
        },
    
        {
            id:4,
            img:"https://www.reliancedigital.in/medias/Philips-Dry-Iron-CLP-Banner-09-04-2021.jpg?context=bWFzdGVyfGltYWdlc3wxNTYzOTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGY5L2hmZS85NTE4NzMyMTgxNTM0LmpwZ3w2ZmU3MWM3YzViMTc2NzMxM2VhNjQzYjNmZmJmZmU4NDU1ZjFlZmJjYTdhMmQxNjc4YmQ4NTA4OTEwMDNhZjYx"
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
      dispatch(getPostsIron())
     posts.sort((a,b)=>{
      return (a.price)-(b.price);
     })
     dispatch(updatePosts(posts))
    }

    let desc=()=>{
      dispatch(getPostsIron())
      posts.sort((a,b)=>{
        return (b.price) - (a.price)
      })
      dispatch(updatePosts(posts))
    }

    let filter=(txt)=>{
     
      dispatch(getPostsIron())
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
               <Box>Filter</Box>
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
        
        <Checkbox onClick={()=>{filter('Usha')}}>Usha </Checkbox>
        <Checkbox onClick={()=>{filter('Philips')}}>Philips </Checkbox>
        <Checkbox onClick={()=>{filter('Kelvinator')}}>Kelvinator </Checkbox>
        <Checkbox onClick={()=>{filter('BPL')}}>BPL </Checkbox>
      </Box>
    </Card>
     </Box>
<Box className='m-right'>
  {/* ui right heading */}
  <Card className='m-heading' bg={'whiteAlpha.900'}>
      <CardBody className="m-head">
        <Box>
            <Heading size='x' textStyle='h5'>
                  IRON
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
       <Image src={post.img} alt={post.price}className="image"/>
       <Box style={{height:'40%'}}>
           <Text style={{height:"40%", overflow:"hidden"}} >{post.desc}</Text>
           <Text>&#8377; {post.price}</Text>
           <Text style={{display:"flex",marginLeft:"30%"}}>{post.rating? star(post.rating) : ""}</Text>
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
           <Text style={{width:"75%", marginLeft:"25%", marginTop:"-25%"}}>Wish List</Text>
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

