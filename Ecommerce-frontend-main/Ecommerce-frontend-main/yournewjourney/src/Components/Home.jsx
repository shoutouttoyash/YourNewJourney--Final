import { Button, Center, Flex, FormControl, FormLabel, Image, Input, Text, Textarea } from '@chakra-ui/react'
import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react'
import yj from "./Images/yj.jpg"
import { useAuth, useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { cartState } from './StateManage';




export default function Home() {
  const { isSignedIn } = useUser();
  const {userId} = useAuth();
  const [cart, setCart]= useRecoilState(cartState)

 useEffect( ()=>{

  if(isSignedIn == true)
  {
         
    axios.get( `https://ecommerce-backend-production-229e.up.railway.app/user/${userId}`, 
  
     {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Received data:', response.data);
      // Perform actions with the received data
        setCart(response.data.cart)

    })
    .catch(error => {
      console.error('There was a problem with the Axios request:', error);
    });

  }
  else{

    setCart([])
  }

 } , [isSignedIn])

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("service_xr5hswr", "template_0bfhv0c", e.target, "jtGkZPt3RMwtI6XNH")
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

  e.target.reset();
  setFormData({ user_name: '', user_email: '', message: '' });

};




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <Text pt={20} textAlign="center" fontSize={"5xl"}>
        Your Journey to Canada Starts Here
      </Text>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "80px" }} height="" >
        <Image width={"750"} height={"720"} src={yj}></Image>
      </div>


      <div style={{ backgroundColor: "#f4f4f4", marginTop: 60, marginBottom: 80, paddingBottom: 30, display: "flex", justifyContent: "center" }}>

        <div style={{ width: 750 }}>

          <Center>
            <Flex justifyContent={'center'} flexDirection={"column"}>
              <Text fontSize={"2xl"} pt={"20"} pb={"10"}>
                Get In Touch
              </Text>
              <form onSubmit={sendEmail}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.user_name}
                    onChange={handleChange}
                    backgroundColor= {"white"}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    value={formData.user_email}
                    onChange={handleChange}
                    backgroundColor= {"white"}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    backgroundColor= {"white"}
                  />
                </FormControl>
                <Center>
                <Button  colorScheme={"blue"} color={"black"} mt={5} type='submit'>Submit</Button>
                </Center>
              </form>

            </Flex>
          </Center>
        </div>
      </div>


    </>
  )
}














