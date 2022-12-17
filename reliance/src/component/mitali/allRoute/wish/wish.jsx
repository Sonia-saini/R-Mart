import React,{useEffect, useState} from 'react'
import Nav from '../nav'
import {Text,Box,Card,Image, useDisclosure,useToast} from '@chakra-ui/react'
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillHeart ,AiFillStar} from "react-icons/ai"
import {getPostsIron,updatePosts} from '../../api/api.action';
import { useDispatch, useSelector} from "react-redux";
import '../Iron/Iron.css'

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

      let addToCart=(ind)=>{
        posts.map((el)=>{
           if(el.id===ind){
            setCart([...cart,el])
           }
        })
       }
      let remove=(ind)=>{
        //console.log(posts)
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            colorScheme:"red"
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
        
            <Box className="details">
            {wish.map((post)=>{
              return(
                  <Card key={post.id}  bg={'whiteAlpha.900'}>
             <Image src={post.img} alt={post.price}className="image"/>
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
                 <Text style={{width:"75%", marginLeft:"25%", marginTop:"-25%"}}>Add</Text>
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