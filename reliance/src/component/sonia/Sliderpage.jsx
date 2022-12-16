import { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
        import 'slick-carousel/slick/slick.css';
        import 'slick-carousel/slick/slick-theme.css';
        import './carousel.css';
import { ChevronLeftIcon ,ChevronRightIcon} from '@chakra-ui/icons';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Single } from './SingleProduct/action';
import { Link, Navigate } from 'react-router-dom';
      

let data=["https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTAwN3xpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDI5Lzk5Mjk4MTAyMTQ5NDIuanBnfGUxYTc3MTMzNThhNzlkZGQyNTNlYTYxMzM3OWM4NzQzYjY2YWYwYzFkNjhhMjA5M2YwNDhiYTMwMzA2ZGY5MTY",

            
"https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0",
              
            "https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY"
            
              
           
            ,"https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y"
            ,
              
           
            "https://www.reliancedigital.in/medias/Moto-G42-Carousel-Banner-09-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g2ZC85OTI5ODI3Mzg1Mzc0LmpwZ3w4MzEyODVmNTUyNWIwODNlNTA1YThjNTA4Njg5ZmU1YTU1ZjZlMzM5NWY5ODI0ZWNmOTAwYjY5M2RhNWVkOTky" 
            ,
            
            "https://www.reliancedigital.in/medias/Apple-Accessories-Carousel-Banner-01-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MjY3M3xpbWFnZS9qcGVnfGltYWdlcy9oZTIvaDg3Lzk5MjgxNzE1NTI3OTguanBnfDkzOTI0MDE5YzgxOTVmNzdiMTBlNWZhMTQwMWZmNDc1ZTU2MzY5YmIwZTBlZWQ2ZjRkYWVhYzBkZTkzMTM3Y2M" 
            ,
           
           'https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4Mjc4NHxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDNlLzk5MzExODEzNTkxMzQuanBnfDA5Nzc0YWExYjdjM2YzNTg4Njk4MDJjZGU1ZWQ4NzAzOTIzZDgxMWU2MjVhYjdkNTI2MzBhNWJhYzg0ZTZjMTk' 
           ,
              
              "https://www.reliancedigital.in/medias/Apple-S8-CLP-Banner-14-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w5MjcyNHxpbWFnZS9qcGVnfGltYWdlcy9oMzgvaDdkLzk5MjgzNzEwNDQzODIuanBnfDcxMDY3Y2FkZDNmNTkxNGM5MmMzZDNmYjI3Y2U0MzQ4Yzk1NGM1YTMwZDkzNWZiZWYzMjc0NWExNWY4NmExMGQ" 
              
        ]
       
        // import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
       
        let slidesToShow = 4;
        const PreviousBtn = (props) => {
          console.log(props);
          const { className, onClick, currentSlide } = props;
          return (
            <>
            {currentSlide!==0&&(
                <div className={className} onClick={onClick}>
                  <ChevronLeftIcon style={{ color: 'black', fontSize: '30px' }} />
                </div>
              )}
            </>
          );
        };
        const NextBtn = (props) => {
          const { className, onClick, slideCount, currentSlide } = props;
          console.log(props);
          return (
            <>
              {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                  <ChevronRightIcon style={{ color: 'black', fontSize: '30px' }} />
                </div>
              )}
            </>
          );
        };
        const carouselProperties = {
          prevArrow: <PreviousBtn />,
          nextArrow: <NextBtn />,
          slidesToShow: slidesToShow,
          slidesToScroll: 2,
          infinite: false,
          // slidesToScroll={3}
          responsive: [
            {
              breakpoint: 426,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                centerMode: false,
              },
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 2,
              },
            },
          ],
        };
        const MultiItemCarousel = ({watch}) => {
          const [width, setWidth] = useState(window.innerWidth);
          const updateWidth = () => {
            setWidth(window.innerWidth);
          };
        
          useEffect(() => {
            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
          }, []);
        
          if (width <= 426) {
            slidesToShow = 1;
          } else if (width > 426 && width <= 769) {
            slidesToShow = 3;
          } else if (width > 769 && width <= 1025) {
            slidesToShow = 4;
          } else {
            slidesToShow = 5;
          }
        
          return (
            <div style={{ margin: '30px' }} className='carousel'>
             
             
              <Slider {...carouselProperties}>
                {watch.map((item) => (
                  <Card item={item} />
                ))}
              </Slider>
            </div>
          );
        };
        
        const Card = ({ item }) => {
          const dispatch=useDispatch()
          // const d=useSelector((state)=>state)
        const onClick=(el)=>{
          
          dispatch(Single(el))
        return <Navigate to="/single"/>
        }
          return (
        <Link to="/single">    <div style={{ textAlign: 'center' }} onClick={()=>onClick(item)}>
              <img
                className='multi__image'
                src={item.url}
                alt=''
                style={{
                  width: '100%',
                  height: '170px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <Heading style={{ fontSize: '12px',margin:"auto",width:"200px" }} _hover={{color:"red"}} >{item.name}</Heading>
              <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
                From ₹ {item.price}
              </p>
             
             
              <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
                You Save {item.discount}%(₹{(item.price*item.discount)/100})
              </p>
              <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
                Up To ₹ 5,000 Off on HDFC
              </p>
            </div></Link>
          );
        };
        
        export default MultiItemCarousel;
