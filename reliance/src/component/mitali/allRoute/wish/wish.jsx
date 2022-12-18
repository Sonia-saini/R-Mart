import React,{useEffect, useState} from 'react'
import Nav from '../nav'
import {Text,Box,Card,Image, useDisclosure,useToast} from '@chakra-ui/react'
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillHeart ,AiFillStar} from "react-icons/ai"
import {getPostsIron,updatePosts} from '../../api/api.action';
import { useDispatch, useSelector} from "react-redux";
import '../Iron/Iron.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Wish = () => {
    let wishes=JSON.parse(localStorage.getItem('wish'))
    const { isOpen, onOpen, onClose } = useDisclosure()
let [wish, setWish] = useState([])
    let posts= useSelector((store)=>store.postsManager.posts)
    let [cart, setCart] = useState([])
    const toast = useToast()
    const dispatch = useDispatch()

   // console.log(wish)
useEffect(()=>{
    setWish(wishes)
},[])

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

// useEffect(() => {
//     dispatch(getPostsIron())
//   }, []);
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

      let addToCart=(ind,st)=>{
        posts.map((el)=>{
           if(el.id===ind){
            setCart([...cart,el])
           }
        })
        toast({
          title: 'Added to Cart',
          description: "Your Item has been added to cart successfully",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
       }
      let remove=(ind)=>{
        //console.log(posts)
        toast({
            title: 'wish List discarded.',
            description: "you've removed item from wish list",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          wish.map((el)=>{
            if(el.id===ind){
               setWish([])
            }
          })
      }
      console.log(wish)

      //localStorage.removeItem()
  return (
    <div>
        <Nav/>
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
 
            <Box className="details">
            {wish.map((post)=>{
              return(
                  <Card key={post.id}  bg={'whiteAlpha.900'}>
             <Image src={post.img? post.img : post.url} alt={post.price}className="image"/>
             <Box style={{height:'40%'}}>
                 <Text style={{height:"40%", overflow:"hidden"}} >{post.desc}</Text>
                 <Text>&#8377; {post.price}</Text>
                 <Text style={{display:"flex",marginLeft:"30%"}}>{post.rating? star(post.rating) : ""}</Text>
                 <Box className='offers'>OFFERS AVAILABLE</Box>
             </Box> 
              <Box style={{display:"flex", height:"10%"}}>
               <Card className="wishList" onClick={()=>{addToCart(post.id)}}>
               <Text style={{width:"25%"}} className="cart">
                 <FaCartArrowDown color='green' size="95%" width="40%" />
                 </Text>
                 <Text style={{width:"75%", marginLeft:"25%", marginTop:"-25%"}} onClick={()=>{addToCart(post.id)}}>Add</Text>
               </Card>
               <Card className="wishList" onClick={()=>{remove(post.id)}}>
                 <Text style={{width:"25%"}}>
                 <AiFillHeart  color='red' size="95%" width="40%"/>
                 </Text>
                 <Text style={{width:"75%", marginLeft:"25%", marginTop:"-25%"}}>remove</Text>
               </Card>
              </Box>
            </Card>
              )
            })}
            </Box>

          

    </div>
  )
}

export default Wish