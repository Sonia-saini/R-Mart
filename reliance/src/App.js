// import logo from './logo.svg';
 import React from "react";
import { Home } from "./component/sonia/home";

import { Image } from "@chakra-ui/react";
// import Login from './component/suman/Login';
//  import Otp from './component/suman/Otp';
// import Register from './component/suman/Register';
import Slider from "react-slick";
import  { Component } from "react";
import MultiItemCarousel from "./component/sonia/Sliderpage";


// export class PauseOnHover extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1000,
//       pauseOnHover: true
//       ,
      
//         initialSlide:2

//     }
//     return (
//       <div>
        
//         <Slider {...settings}>
//           <div>
//             <Image src="https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTAwN3xpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDI5Lzk5Mjk4MTAyMTQ5NDIuanBnfGUxYTc3MTMzNThhNzlkZGQyNTNlYTYxMzM3OWM4NzQzYjY2YWYwYzFkNjhhMjA5M2YwNDhiYTMwMzA2ZGY5MTY" w="1000px" m="auto" ml={"500px"}/>
//           </div>
//           <div>
//           <Image src="https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0" w="1000px" m="auto"  ml={"500px"}/>
            
//           </div>
//           <div>
//           <Image src="https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY" w="1000px" m="auto"  ml={"500px"}/>
            
//           </div>
//           <div>
//           <Image src="https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y" w="1000px" m="auto"  ml={"500px"}/>
            
//           </div>
//           <div>
//           <Image src="https://www.reliancedigital.in/medias/Moto-G42-Carousel-Banner-09-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g2ZC85OTI5ODI3Mzg1Mzc0LmpwZ3w4MzEyODVmNTUyNWIwODNlNTA1YThjNTA4Njg5ZmU1YTU1ZjZlMzM5NWY5ODI0ZWNmOTAwYjY5M2RhNWVkOTky" w="1000px" m="auto"  ml={"500px"}/>
            
//           </div>
//           <div>
//           <Image src="https://www.reliancedigital.in/medias/Apple-Accessories-Carousel-Banner-01-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MjY3M3xpbWFnZS9qcGVnfGltYWdlcy9oZTIvaDg3Lzk5MjgxNzE1NTI3OTguanBnfDkzOTI0MDE5YzgxOTVmNzdiMTBlNWZhMTQwMWZmNDc1ZTU2MzY5YmIwZTBlZWQ2ZjRkYWVhYzBkZTkzMTM3Y2M" w="1000px" m="auto"  ml={"500px"}/>
            
//           </div>
//           <div>
//             <Image src='https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4Mjc4NHxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDNlLzk5MzExODEzNTkxMzQuanBnfDA5Nzc0YWExYjdjM2YzNTg4Njk4MDJjZGU1ZWQ4NzAzOTIzZDgxMWU2MjVhYjdkNTI2MzBhNWJhYzg0ZTZjMTk' width="1000px" m="auto"  ml={"500px"}/>
//           </div>
//           <div>
//             <Image src='https://www.reliancedigital.in/medias/Apple-S8-CLP-Banner-14-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w5MjcyNHxpbWFnZS9qcGVnfGltYWdlcy9oMzgvaDdkLzk5MjgzNzEwNDQzODIuanBnfDcxMDY3Y2FkZDNmNTkxNGM5MmMzZDNmYjI3Y2U0MzQ4Yzk1NGM1YTMwZDkzNWZiZWYzMjc0NWExNWY4NmExMGQ' w="1000px" m="auto"  ml={"500px"}/>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
function App() {
  return (
    <div>
      <Home/> 
      

     
     
    </div>
  );
}

export default App;
