import React from 'react'
import {Box,Heading,Image,Stack} from "@chakra-ui/react"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import MultiItemCarousel from './Sliderpage';
import RoomHeater from './Roomheaters';




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
        const watch=[
          {url:"https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzAzNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDA2L2hlNC85ODkxOTY0ODQ2MTEwLmpwZ3wzYmJlMzk2MWE3ODY0ZTY1ODZkMzFiMmQ0NjBlYjMwNGRlM2ExNjVlYjEzNTFiMjNiODRkZGY2NTAyODcwMDFm",
        price:85405,
        discount:5,
        name:'Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Blue and Gray Trail Loop - M/L'
        }
        ,{
        
          url: "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MTcyMHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDY3Lzk4OTE5NjA5MTM5NTAuanBnfGM1ZjRkMjAwMWExYzg1MTA4ODYzOTYyOWRlOWNkY2JlNjA5ZjFjYmY4Yzg3ZjRiNzA0ODczMTY4YzNhMWYxODk",
        price:80000,
        discount:4,
        name:"Apple Watch SE GPS + Cellular - 40 mm Silver Aluminium Case with White 2nd Generation Sport Band"
        },
        {
          url:"https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzE5OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDAzL2hhYy85ODkxOTYwMjU4NTkwLmpwZ3w3M2Q2ZjEwNGMzMzQzODg2MmU0YzQ4MmM5YzA3NWUzZmE4YjRlODY2YTdkMDhjYmRiODEzMDNkODZkZDA0NGU2"
        ,price:90000,
        discount:3,
        name:"Apple Watch SE GPS + Cellular 44 mm Starlight Aluminium Case with Starlight 2nd Generation Sport Band"
        },{
          url:"https://www.reliancedigital.in/medias/Apple-SE-Sports-Fitness-Watches-493177927-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MzUyNnxpbWFnZS9qcGVnfGltYWdlcy9oZTMvaGNmLzk4OTE5OTI3NjQ0NDYuanBnfGExYWE0ZjI3MWE0MTlkMmQxNjdhNDlhNDg4Nzk3NWI2Yzg5NzI1MDMzMmFjZTk5NTA3MWExZGM0NmEzN2NjZjM",
          price:85000,
          discount:6,
          name:"Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Orange Alpine Loop - Medium"
        },
        {url:"https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzAzNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDA2L2hlNC85ODkxOTY0ODQ2MTEwLmpwZ3wzYmJlMzk2MWE3ODY0ZTY1ODZkMzFiMmQ0NjBlYjMwNGRlM2ExNjVlYjEzNTFiMjNiODRkZGY2NTAyODcwMDFm",
        price:85405,
        discount:5,
        name:'Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Blue and Gray Trail Loop - M/L'
        }
        ,{
        
          url: "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MTcyMHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDY3Lzk4OTE5NjA5MTM5NTAuanBnfGM1ZjRkMjAwMWExYzg1MTA4ODYzOTYyOWRlOWNkY2JlNjA5ZjFjYmY4Yzg3ZjRiNzA0ODczMTY4YzNhMWYxODk",
        price:80000,
        discount:4,
        name:"Apple Watch SE GPS + Cellular - 40 mm Silver Aluminium Case with White 2nd Generation Sport Band"
        },
        {
          url:"https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzE5OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDAzL2hhYy85ODkxOTYwMjU4NTkwLmpwZ3w3M2Q2ZjEwNGMzMzQzODg2MmU0YzQ4MmM5YzA3NWUzZmE4YjRlODY2YTdkMDhjYmRiODEzMDNkODZkZDA0NGU2"
        ,price:90000,
        discount:3,
        name:"Apple Watch SE GPS + Cellular 44 mm Starlight Aluminium Case with Starlight 2nd Generation Sport Band"
        },{
          url:"https://www.reliancedigital.in/medias/Apple-SE-Sports-Fitness-Watches-493177927-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MzUyNnxpbWFnZS9qcGVnfGltYWdlcy9oZTMvaGNmLzk4OTE5OTI3NjQ0NDYuanBnfGExYWE0ZjI3MWE0MTlkMmQxNjdhNDlhNDg4Nzk3NWI2Yzg5NzI1MDMzMmFjZTk5NTA3MWExZGM0NmEzN2NjZjM",
          price:85000,
          discount:6,
          name:"Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Orange Alpine Loop - Medium"
        },{url:"https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzAzNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDA2L2hlNC85ODkxOTY0ODQ2MTEwLmpwZ3wzYmJlMzk2MWE3ODY0ZTY1ODZkMzFiMmQ0NjBlYjMwNGRlM2ExNjVlYjEzNTFiMjNiODRkZGY2NTAyODcwMDFm",
        price:85405,
        discount:5,
        name:'Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Blue and Gray Trail Loop - M/L'
        }
        ,{
        
          url: "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MTcyMHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDY3Lzk4OTE5NjA5MTM5NTAuanBnfGM1ZjRkMjAwMWExYzg1MTA4ODYzOTYyOWRlOWNkY2JlNjA5ZjFjYmY4Yzg3ZjRiNzA0ODczMTY4YzNhMWYxODk",
        price:80000,
        discount:4,
        name:"Apple Watch SE GPS + Cellular - 40 mm Silver Aluminium Case with White 2nd Generation Sport Band"
        },
        {
          url:"https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzE5OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDAzL2hhYy85ODkxOTYwMjU4NTkwLmpwZ3w3M2Q2ZjEwNGMzMzQzODg2MmU0YzQ4MmM5YzA3NWUzZmE4YjRlODY2YTdkMDhjYmRiODEzMDNkODZkZDA0NGU2"
        ,price:90000,
        discount:3,
        name:"Apple Watch SE GPS + Cellular 44 mm Starlight Aluminium Case with Starlight 2nd Generation Sport Band"
        },{
          url:"https://www.reliancedigital.in/medias/Apple-SE-Sports-Fitness-Watches-493177927-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MzUyNnxpbWFnZS9qcGVnfGltYWdlcy9oZTMvaGNmLzk4OTE5OTI3NjQ0NDYuanBnfGExYWE0ZjI3MWE0MTlkMmQxNjdhNDlhNDg4Nzk3NWI2Yzg5NzI1MDMzMmFjZTk5NTA3MWExZGM0NmEzN2NjZjM",
          price:85000,
          discount:6,
          name:"Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Orange Alpine Loop - Medium"
        }
        ]
        

    let data1=[
      "https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk",
      "https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm",
      "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2"
    ]    
let personal=[
  {
    url:"https://www.reliancedigital.in/medias/WAHL-05608-524-Trimmers-491891812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDA5NTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDk4L2g2OC85Mzc0NjUwMDQwMzUwLmpwZ3wwYzdlMmFjZDVlM2VkMThjZjE4N2Q2ODI1YzE1ZGNlYmEwZTgxOTNlZDFkNTkyNTU2MzE0M2Y2N2NlYWYyYjEy",
    price:199,
    discount:3,
    name:"Wahl Cordless Trimmer Mini Groomsman 3 in 1 Grooming Kit, 05608-524 Black"
  },
  {
    url:"https://www.reliancedigital.in/medias/Lifelong-LLM27-Massagers-491903055-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjMwNzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2hlMS85ODY0MjcyNDEyNzAyLmpwZ3wwZmQyOGU3MTU0MDM4MmNjZTgwOTZhZGMzMDIwMjg2OWUzMDY2ZDVhNTk5ZWY4NjIxYTJmYzdkNDY1ZGE5OGU3",
    price:699,
    discount:5,
    name:"Lifelong LLM27 Electric Handheld Full Body Massager"
  },
  {
    url:"https://www.reliancedigital.in/medias/Philips-BT1230-15-TRIMMER-492664323-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjYyOXxpbWFnZS9qcGVnfGltYWdlcy9oMzAvaGJjLzk3NDk1ODU1OTIzNTAuanBnfGE0Y2JkNTQ2M2RhNDc5ODkwZjViNGYyYzhkMTc4NjkwMzk0MDc0YjgzNDlhMWI5MjM4ZGViMTZmZDdkZWQ3NGY",
    price:699,
    discount:2,
    name:"Philips Beard Trimmer BT1230/15 with USB Charging"
  },
  {
    url:"https://www.reliancedigital.in/medias/WAHL-09916-2724-TRIMMER-492573317-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjIyMnxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGIzLzk4NjU1NjY3ODE0NzAuanBnfDhlZGQ2MWVjMTI3NjZjMGM0M2Q1ZmQyNGI5M2ZkNWRiYTU0ZjZmYTgzNTk0MDE1ZTI4NTU0Y2FhYzFiNTllYjc",
    price:799,
    discount:5,
    name:"Wahl Beard Rechargeable Trimmer with Self Sharpening Blades and Travel Lock, Black"
  },
  {
    url:"https://www.reliancedigital.in/medias/WAHL-WCHD4-1124-HAIRDRYER-492573314-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODk0M3xpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDU1Lzk3NTExNDIxNzA2NTQuanBnfDQ0YTYxOGE4MDdlYTExZjczOTFkNGU5MDBiNDgwOTA1NWJiZjUxM2U3ZjI2NzVmNGIzZDgzNTMxYTVjNmI5MzE",
    price:799,
    discount:6,
    name:"Wahl 1200 Watts Hair Dryer with 2 Heat Settings, Black, WCHD4-1124"
  },{
    url:"https://www.reliancedigital.in/medias/WAHL-05608-524-Trimmers-491891812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDA5NTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDk4L2g2OC85Mzc0NjUwMDQwMzUwLmpwZ3wwYzdlMmFjZDVlM2VkMThjZjE4N2Q2ODI1YzE1ZGNlYmEwZTgxOTNlZDFkNTkyNTU2MzE0M2Y2N2NlYWYyYjEy",
    price:199,
    discount:3,
    name:"Wahl Cordless Trimmer Mini Groomsman 3 in 1 Grooming Kit, 05608-524 Black"
  },
  {
    url:"https://www.reliancedigital.in/medias/Lifelong-LLM27-Massagers-491903055-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjMwNzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2hlMS85ODY0MjcyNDEyNzAyLmpwZ3wwZmQyOGU3MTU0MDM4MmNjZTgwOTZhZGMzMDIwMjg2OWUzMDY2ZDVhNTk5ZWY4NjIxYTJmYzdkNDY1ZGE5OGU3",
    price:699,
    discount:5,
    name:"Lifelong LLM27 Electric Handheld Full Body Massager"
  },
  {
    url:"https://www.reliancedigital.in/medias/Philips-BT1230-15-TRIMMER-492664323-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjYyOXxpbWFnZS9qcGVnfGltYWdlcy9oMzAvaGJjLzk3NDk1ODU1OTIzNTAuanBnfGE0Y2JkNTQ2M2RhNDc5ODkwZjViNGYyYzhkMTc4NjkwMzk0MDc0YjgzNDlhMWI5MjM4ZGViMTZmZDdkZWQ3NGY",
    price:699,
    discount:2,
    name:"Philips Beard Trimmer BT1230/15 with USB Charging"
  },
  {
    url:"https://www.reliancedigital.in/medias/WAHL-09916-2724-TRIMMER-492573317-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjIyMnxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGIzLzk4NjU1NjY3ODE0NzAuanBnfDhlZGQ2MWVjMTI3NjZjMGM0M2Q1ZmQyNGI5M2ZkNWRiYTU0ZjZmYTgzNTk0MDE1ZTI4NTU0Y2FhYzFiNTllYjc",
    price:799,
    discount:5,
    name:"Wahl Beard Rechargeable Trimmer with Self Sharpening Blades and Travel Lock, Black"
  },
  {
    url:"https://www.reliancedigital.in/medias/WAHL-WCHD4-1124-HAIRDRYER-492573314-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODk0M3xpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDU1Lzk3NTExNDIxNzA2NTQuanBnfDQ0YTYxOGE4MDdlYTExZjczOTFkNGU5MDBiNDgwOTA1NWJiZjUxM2U3ZjI2NzVmNGIzZDgzNTMxYTVjNmI5MzE",
    price:799,
    discount:6,
    name:"Wahl 1200 Watts Hair Dryer with 2 Heat Settings, Black, WCHD4-1124"
  }
]
        
export function Home() {
 
  
  return (
    <Box margin={"auto"}>
      <Box>
        <Image w="100%"src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx" display="block"margin={"auto"}/>
      </Box>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src="https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTAwN3xpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDI5Lzk5Mjk4MTAyMTQ5NDIuanBnfGUxYTc3MTMzNThhNzlkZGQyNTNlYTYxMzM3OWM4NzQzYjY2YWYwYzFkNjhhMjA5M2YwNDhiYTMwMzA2ZGY5MTY" class="d-block w-100" alt="..."/>
    </div>
    {
      data.map((el)=>(
        <div class="carousel-item">
        <Image src={el} class="d-block w-90" alt="..."/>
      </div>
      ))
    }
   </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" id='prev'>
    <span class="carousel-control-prev-icon" aria-hidden="true"  style={{backgroundColor:"gray",padding:"60px 0px",marginLeft:"-180px"}}></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" id='next'>
    <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"gray",padding:"60px 0px",marginRight:"-180px"}}></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
{/* watach */}
   <Stack mt="30px">
    <Heading fontSize="22px" p="10px">PRICE DROP ON APPLE SMARTWATCHES</Heading>

   <Box width="100%" display={{md:"grid",lg:"flex"}} p="10px"> <Box width={{base:"auto",md:"auto",lg:"30%"}}>
      <Image src="https://www.reliancedigital.in/medias/Apple-Watches-Producst-Carousel-29-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NTYyOHxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDQyLzk5MjgzNzA5Nzg4NDYuanBnfDg5OTE2MzFkOTU2YmI1ODhjOTZmODQ2YzkyNjUzNjYwZTYxZGQ2NGY4OTdhNmU3YjBkZGZmZGI3MzM2OWQwNzQ"w={{base:"100%",md:"auto",lg:"100%"}} mt="10px" mb="10px"/>
    
    </Box>
    <Box width={{base:"auto",md:"auto",lg:"70%"}}>
      <MultiItemCarousel watch={watch}/>
    </Box>
    </Box>
    </Stack>   
  
  <Box  w={"99%"}>
    <Heading  fontSize={{sm:"20px",base:"12px",md:"24px"}} p="10px">
    ENTERTAINMENT FEST
    </Heading>
    <Box  display={{md:"flex",base:"grid" }}gap="20px" justifyContent={"center"} pt={10}>
    {
      ["https://www.reliancedigital.in/medias/43-inch-UHD-TV-Small-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MTc5NXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGM2Lzk5MjgxNjcyNjAxOTAuanBnfDg4MjdjN2IwZWViMTNlNmM2ODdiOWZjNzU2M2RkZmVlZTMxMmM4ODRlZWQ3MWNhMWIwYWI3NmNhMDcxNjkxY2M",
    "https://www.reliancedigital.in/medias/Headphones-and-Earphones-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w0MDQzNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDU0Lzk5MjY3ODEzMzc2MzAuanBnfGI1Y2Q4MDExYTAwOGEzYzhlNWQxOTI0MzU2ZWIyY2YyYWQ5NDE1M2EwYzNmMTNjNjA4MGZiMTU2Y2VlZGNlZDQ",
  "https://www.reliancedigital.in/medias/Best-Deals-in-TV-Small-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w0ODE2NnxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDY1Lzk5MjgxNjcxOTQ2NTQuanBnfDhiODBlYTA4YmI1OTA0YjZkMTkzYjA0ZTRmOWQ5MzMxMjcyZDJjODY0YTE3MWE4M2ZlNDIxODRhNzFiODJkYjY",
"https://www.reliancedigital.in/medias/Soundbars-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTg3NHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaGQ1Lzk5MjY3ODE0MDMxNjYuanBnfDY5ODQ2ZDU3NDFlMjgxYTY2YTViZmQ1ZTA4Y2U5ZTMwYjVlNjYzNTk3YzJjNzkyMDUwY2VkY2ZlZTViODQ1NjQ"
].map((el)=><Image src={el} w={{base:"auto",md:"100%"}} justifySelf="center"/>)
    }</Box>
    <Stack mt="10px">
      <Heading  fontSize={{sm:"20px",base:"12px",md:"24px"}} p="10px">BIGGEST PRICE DROP ON ROOM HEATERS</Heading>
      <Stack p="10px">
        <RoomHeater/>
      </Stack>
    </Stack>
    <Box w={"100%"} margin={"auto"}>
      <Heading  fontSize={{sm:"20px",base:"12px",md:"24px"}} p="10px">GREAT DEALS ON ELECTRONICS</Heading>
      <Box display={"grid"} gridTemplateColumns={"repeat(4,1fr)"}  alignSelf={"center"}  margin="auto">
        {
          ["https://www.reliancedigital.in/medias/Winter-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w2ODA0M3xpbWFnZS9qcGVnfGltYWdlcy9oYTUvaDhmLzk5MTM3NzczMjQwNjIuanBnfDdjMTE5YzUzNjcyODZiNDljNGJlNDMzZTNkNGI5Nzg2ZjlhOTg0YmFhYTViOTZmOTFkNmY1MWRlZGQ4NWY5ZDY",
        'https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y',
      "https://www.reliancedigital.in/medias/Samsung-M13-5G-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNDUzN3xpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGY3Lzk5MjM5MDIzNDExNTAuanBnfDdiZjliNDZlOWUxZDFjZDQ2MDkzYjdjZDZhNDVlNWI0MGYwNTAwOWJkOWM4MWUzMTUyYmNmZmRmZjk3NjIwYjk",
    "https://www.reliancedigital.in/medias/MackBook-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDkyLzk5MTkwODgzMjg3MzQuanBnfDcxYmMyMDMxMjdiMzUxYzE2NmJkYTU4ZDBlNTQxNjBkZWViYjQ1Mzc2Y2IyOWYwNTllODhkNmRlZjA0NjM3NmI",
  "https://www.reliancedigital.in/medias/Smartwatches-Small-Banners-01.jpg?context=bWFzdGVyfGltYWdlc3w0NDA0MnxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaGRiLzk5MjgzNzA5MTMzMTAuanBnfGYwOWU2ZjQ3Y2Y0OWI2NmVhZGVkYWM2M2ZiMzQ4YTlhODRkZDY4ODZmODA1OGQyZWNiYWVhODNmNWM2YWMwMmY",
"https://www.reliancedigital.in/medias/TCL-HD-LED-TV-Great-Deals-Banner-9990-29-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NDQwM3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaGM2Lzk5Mjk4MzAzNjcyNjIuanBnfDI2MjRhN2FlMDRkMjVjNTk1NDRlOWI0NjI0YmU5NmIxYTRhZTgxNmE1YzQ4YjVkMzUzZjZiMjRjMGI1NGM5MmQ",
"https://www.reliancedigital.in/medias/Printers-Small-Banners-01-1-.jpg?context=bWFzdGVyfGltYWdlc3w0MDAwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGQxLzk5Mjg3MzAzNDU1MDIuanBnfGMyNTg3NWQyZWRmMGU2M2EzZmEwM2U2MWNlMTA3ZWQzYjk4MmRhM2EzYjY0N2FiZGM4OGFlYWQ2NjBlZjE4YWE",
"https://www.reliancedigital.in/medias/Washing-Machines-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDUwLzk5MTM3Nzc3MTcyNzguanBnfGMyNWJhNDNiMTFkMjE4YmQ2OGRiMzdkMGIxNmZmZDhiYzViMTBjY2I1ZDllYzAyMWFjN2FlZTU1ZGVmMDk4MmU"
].map((el)=><Image src={el} w={"90%"} justifySelf="center" mt="35px"/>)
}
      </Box>
    </Box>
  </Box>
  <Box>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src="https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU" class="d-block w-100" alt="..."/>
    </div>
    {
      data1.map((el)=>(
        <div class="carousel-item">
        <Image src={el} class="d-block w-100" id="car"alt="..."/>
      </div>
      ))
    }
   </div>
   </div>
  </Box>
  <Box>
    <Heading p="10px" fontSize={{sm:"10px",base:"12px",md:"18px"}} color="blue.700" textAlign="center">THE RELIANCE DIGITAL BRAND PROMISE</Heading>
    <Box display={"flex" }gap="20px" justifyContent={"center"} pt={10}>
      {
        [{src:"https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk"
      ,h:"INSTA DELIVERY",p:"LESS THAN 3 HOURS"},
      {src:"https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh",
    h:'BEST FINANACE OPTIONS',p:"WIDE RANGE"},
    {src:"https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY",
  h:"SERVICE GURANTEE",p:"HASSLE FREE"},
 { src:"https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU",
h:"UNMATCHED NETWORK",p:"700 CITIES, 2000 STORES"}]
  .map((el)=><Box border="1px solid gray" w={300} height={120} borderRadius={10} bg="blue.50" textAlign="center">
  <Image src={el.src} w={{base:"30px",md:"40px",sm:"20px"}} h={"auto"} margin="auto" mt="35px" />
  <Heading color="blue.700" fontSize={{sm:"10px",base:"9px",md:"13px"}}>{el.h}</Heading>
  <Heading fontSize={{sm:"6px",base:"9px",md:"12px"}}>{el.p}</Heading>
  </Box>)
}
    </Box>
  </Box>
  <Stack mt="30px">
    <Heading fontSize="22px" p="10px">UP TO 80% OFF ON PERSONAL CARE APPLIANCES</Heading>

   <Box width="100%" display={{md:"grid",lg:"flex"}} p="10px"> <Box width={{base:"auto",md:"auto",lg:"30%"}}>
      <Image src="https://www.reliancedigital.in/medias/Best-of-Monitors-Producst-Carousel-27-Personal-care-appliances-02.jpg?context=bWFzdGVyfGltYWdlc3w1MDYxN3xpbWFnZS9qcGVnfGltYWdlcy9oNTcvaDU1Lzk5MjkyMTYxNjM4NzAuanBnfDU2YWUyODU2M2UxNTZiM2ZkZDgyNDBiNDliN2I1YmVkYmQwYWQ1YmMzY2NmOWNhYjQyMDI2ODY1ZGMzYWVkOGQ" w={{base:"100%",md:"auto",lg:"auto"}} mt="10px" mb="10px"/>
    
    </Box>
    <Box width={{base:"auto",md:"auto",lg:"70%"}} >
      <MultiItemCarousel watch={personal}/>
    </Box>
    </Box>
    </Stack>  
  {/* <MultipleItems/> */}
  
    </Box>
  )
}

