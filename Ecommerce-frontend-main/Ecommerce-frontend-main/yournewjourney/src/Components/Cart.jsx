import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from './StateManage';
import {
  Box,
  Flex,
  Heading,
  HStack,
 
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import  { useNavigate} from 'react-router-dom'
import { Link as ChakraLink  } from '@chakra-ui/react'
// import { CartItem } from './CartItem'
// import { CartOrderSummary } from './CartOrderSummary'
// import { cartData } from './_data'




export default function Cart() {

   
  let navigate= useNavigate()
  const {  isSignedIn , userId} = useAuth();
  let [rec,setRec]= useRecoilState(cartState)
    
    useEffect (()=>{


        // if( rec.length>  0)
        // { 
        //     localStorage.setItem("PS", JSON.stringify( rec))

        // }
        // if( rec.length == 0  )
        //   {

        //     console.log(localStorage.getItem("PS") )
        //     setRec( JSON.parse( localStorage.getItem("PS")))

        //   }
         
      if(isSignedIn    )
       {
   console.log(rec)
          
          axios.post( `https://ecommerce-backend-production-229e.up.railway.app/user/cart/${userId}`, 
          [
            ...rec
          ]
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          })
     
        
          .then(response => {
            console.log(rec)
            console.log('Received data:', response.data);
            // Perform actions with the received data
          })
          .catch(error => {
            console.error('There was a problem with the Axios request:', error);
          })

        }
      

    }, [isSignedIn, rec] )
    
    console.log(rec)
  return (
    <>
   

  <Box
    maxW={{
      base: '3xl',
      lg: '7xl',
    }}
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align={{
        lg: 'flex-start',
      }}
      spacing={{
        base: '8',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart ({rec.length} item(s))
        </Heading>

        <Stack spacing="6">
          {rec.map((item) => (
          
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartSummary val={rec} />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p> 
          <div onClick={ ()=> { console.log( "rinun") ;  navigate("/Services")}}>
          <ChakraLink  color={mode('blue.500', 'blue.200')  }>Continue shopping</ChakraLink>
          </div>
        </HStack>
      </Flex>
    </Stack>
  </Box>

    </>
  )
}

