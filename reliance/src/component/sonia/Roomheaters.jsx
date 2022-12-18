import { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
        import 'slick-carousel/slick/slick.css';
        import 'slick-carousel/slick/slick-theme.css';
        import './carousel.css';
import { ChevronLeftIcon ,ChevronRightIcon} from '@chakra-ui/icons';


import { Heading } from '@chakra-ui/react';


import { useDispatch } from 'react-redux';

import { Link, Navigate } from 'react-router-dom';
import { Single } from './SingleProduct/action';


      
const watch=[
          {url:"https://www.reliancedigital.in/medias/Usha-QH-3002-Radiators-490784083-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3Mzc5NTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDljL2hjOC85NDE2NTExMzU2OTU4LmpwZ3w4MDQ4Yjk2Nzc5ZWFmM2NhNGYxNTA5Mzg1Zjc4M2ZlNWNhMzkzYjA0NTAxZTQ0NTQxZWI0MjcyMzcwM2U3NjFj",
        price:1249,
        discount:5,
        name:'Usha Quartz QH 3002 Fan-based Heater with Low Power Consumption'
        }
        ,{
        
          url: "https://www.reliancedigital.in/medias/Candes-Infra3-Radiators-493620550-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTYxODR8aW1hZ2UvanBlZ3xpbWFnZXMvaGRjL2g0Ni85ODkyMTg0NjUzODU0LmpwZ3xkNGY2N2I3YjQxM2VjY2Q0ZDBlZjA4YjcyOTNhNDA3ZTAyNTY4NDc0N2ExYTc4NWVkN2ViMTNmNjMxM2FjMWRi",
        price:1799,
        discount:4,
        name:"Candes Infra3 Noiseless 1200 Watts Halogen Room Heater"
        },
        {
          url:"https://www.reliancedigital.in/medias/Candes-INOVARH1CC-Heater-493627147-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTU0NHxpbWFnZS9qcGVnfGltYWdlcy9oZjkvaDdiLzk5MTgwMDY4ODY0MzAuanBnfDJhYzMwZDgxMjQ1MWEyOGE5YmQ3Zjg5ZTdjNWEzNzE4YzdhYjliZWE1OWY3NGU0YzVlODMxYzkzZDgxZGZkNDI"
        ,price:1499,
        discount:3,
        name:"Candes Inova 2000W Fan-based Room Heater with Over-Heat Protection, White, INOVARH1CC"
        },{
          url:"https://www.reliancedigital.in/medias/Candes-Gloster-Radiators-493620551-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MTQ5MXxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDg0Lzk4Nzk3MjM4NjgxOTAuanBnfGM3YjYwNWZmOTgzODZiNjI5ZmFjNzNhZTQ1ZDZkYWUwM2Y2MDJlNjQ4YzJmZjZlZGEzNzRjMzViMGRjZjQ3M2U",
          price:1319,
          discount:6,
          name:"Candes Gloster 2000 Watts All in One Silent Blower Fan Room Heater (White)"
        },
        {url:"https://www.reliancedigital.in/medias/Candes-Infra2-Radiators-493620549-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjM5MTR8aW1hZ2UvanBlZ3xpbWFnZXMvaGQzL2gzYS85ODc5NzI0MTk1ODcwLmpwZ3wwNWEwZDdiNjFkNmVhOTRhZWNlNTM4ZWUyYzI1YjViZDM2MzJlZTBkY2M2ZGU1Mjg2NDkyZWJjZGRhM2E4ZWQy",
        price:1299,
        discount:5,
        name:'Candes Infra2 Noiseless 800 Watts Halogen Room Heater'
        }
        ,{
        
          url: "https://www.reliancedigital.in/medias/Orient-Electric-HC2004D-Heater-493627165-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NDk2NnxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaGNkLzk5MTgwMDcyMTQxMTAuanBnfDRlZDZmNDRlZTc2ZmMwNDUyZDA2ZGU2NWZiNzcwMzJlNjhkZWQ3Y2FiMGUzZWY3NTQ4ZDk5YWNjMjhjYTcyOTA",
        price:2299,
        discount:4,
        name:"Orient Convector HC2004D Fan-based Room Heater with Twin-Fans, Black"
        },
        {url:"https://www.reliancedigital.in/medias/Usha-QH-3002-Radiators-490784083-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3Mzc5NTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDljL2hjOC85NDE2NTExMzU2OTU4LmpwZ3w4MDQ4Yjk2Nzc5ZWFmM2NhNGYxNTA5Mzg1Zjc4M2ZlNWNhMzkzYjA0NTAxZTQ0NTQxZWI0MjcyMzcwM2U3NjFj",
        price:1249,
        discount:5,
        name:'Usha Quartz QH 3002 Fan-based Heater with Low Power Consumption'
        }
        ,{
        
          url: "https://www.reliancedigital.in/medias/Candes-Infra3-Radiators-493620550-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTYxODR8aW1hZ2UvanBlZ3xpbWFnZXMvaGRjL2g0Ni85ODkyMTg0NjUzODU0LmpwZ3xkNGY2N2I3YjQxM2VjY2Q0ZDBlZjA4YjcyOTNhNDA3ZTAyNTY4NDc0N2ExYTc4NWVkN2ViMTNmNjMxM2FjMWRi",
        price:1799,
        discount:4,
        name:"Candes Infra3 Noiseless 1200 Watts Halogen Room Heater"
        },
        {
          url:"https://www.reliancedigital.in/medias/Candes-INOVARH1CC-Heater-493627147-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTU0NHxpbWFnZS9qcGVnfGltYWdlcy9oZjkvaDdiLzk5MTgwMDY4ODY0MzAuanBnfDJhYzMwZDgxMjQ1MWEyOGE5YmQ3Zjg5ZTdjNWEzNzE4YzdhYjliZWE1OWY3NGU0YzVlODMxYzkzZDgxZGZkNDI"
        ,price:1499,
        discount:3,
        name:"Candes Inova 2000W Fan-based Room Heater with Over-Heat Protection, White, INOVARH1CC"
        },{
          url:"https://www.reliancedigital.in/medias/Candes-Gloster-Radiators-493620551-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MTQ5MXxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDg0Lzk4Nzk3MjM4NjgxOTAuanBnfGM3YjYwNWZmOTgzODZiNjI5ZmFjNzNhZTQ1ZDZkYWUwM2Y2MDJlNjQ4YzJmZjZlZGEzNzRjMzViMGRjZjQ3M2U",
          price:1319,
          discount:6,
          name:"Candes Gloster 2000 Watts All in One Silent Blower Fan Room Heater (White)"
        },
        {url:"https://www.reliancedigital.in/medias/Candes-Infra2-Radiators-493620549-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjM5MTR8aW1hZ2UvanBlZ3xpbWFnZXMvaGQzL2gzYS85ODc5NzI0MTk1ODcwLmpwZ3wwNWEwZDdiNjFkNmVhOTRhZWNlNTM4ZWUyYzI1YjViZDM2MzJlZTBkY2M2ZGU1Mjg2NDkyZWJjZGRhM2E4ZWQy",
        price:1299,
        discount:5,
        name:'Candes Infra2 Noiseless 800 Watts Halogen Room Heater'
        }
        ,{
        
          url: "https://www.reliancedigital.in/medias/Orient-Electric-HC2004D-Heater-493627165-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NDk2NnxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaGNkLzk5MTgwMDcyMTQxMTAuanBnfDRlZDZmNDRlZTc2ZmMwNDUyZDA2ZGU2NWZiNzcwMzJlNjhkZWQ3Y2FiMGUzZWY3NTQ4ZDk5YWNjMjhjYTcyOTA",
        price:2299,
        discount:4,
        name:"Orient Convector HC2004D Fan-based Room Heater with Twin-Fans, Black"
        }
      
        
        ]
        
        // import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
        
        let slidesToShow = 5;
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
        const RoomHeater = () => {
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
          
          
        const onClick=(el)=>{
          
          dispatch(Single(el))
          console.log(el,"add")
        return <Navigate to="/single"/>
        }
      
        
      
        
          return (
       
            
      <Link to="/single">   <div style={{ textAlign: 'center' }} onClick={()=>onClick(item)}>
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
                From ₹ {item.price.toLocaleString()}
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
        
        export default RoomHeater;