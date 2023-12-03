import {
  Button,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue as mode,
  useDisclosure,
} from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState } from './StateManage'
import { useEffect, useState } from 'react'
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'


const OrderSummaryItem = (props) => {


  const { label, value } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">${value}</Text> : <Text>$0</Text>}
    </Flex>
  )
}



export default function CartSummary(props) {

    const navigate= useNavigate () ; 
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { userId, isSignedIn } = useAuth();

  const [subTotal, setSubTotal] = useState(0);

  console.log(props.val)
  useEffect(() => {
    let total = 0;
    if (props.val.length == 0)
      setSubTotal(0)
    if (props.val.length > 0) {
      props.val.forEach((item) => {
        total += item.price;
      });
      setSubTotal(total);
    }
  }, [props.val]);



  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={subTotal} />
        <OrderSummaryItem label="Shipping + Tax" value={(subTotal * 13) / 100}>
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            $ {subTotal + (subTotal * 13) / 100}
          </Text>
        </Flex>
      </Stack>
      {

        isSignedIn ? <Button onClick={() => {


          checkout(userId, props.val)
          navigate( "/payment")

          console.log(userId)

        }


        } colorScheme="blue" size="lg" fontSize="md" >
          Checkout
        </Button> :
          <>

            <Button onClick={

              onOpen



            } colorScheme="blue" size="lg" fontSize="md" >
              Checkout
            </Button>





            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>

                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight='bold' mb='1rem'>
                    You need to Sign In before checkout
                  </Text>

                </ModalBody>

                <ModalFooter>
                  <Button onClick={ ()=> {  navigate("/Signin")} } colorScheme='blue' mr={3} >
                    SignIn
                  </Button>
                  <Button onClick={onClose} variant='ghost'>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

          </>
      }

    </Stack>
  )
}


const checkout = (userId, input) => {


  axios.post(`http:ecommerce-backend-production-229e.up.railway.app/user/cart/${userId}`,
    [
      ...input
    ]
    , {
      headers: {
        'Content-Type': 'application/json'
      }
    })


    .then(response => {
      console.log('Received data:', response.data);
      // Perform actions with the received data
    })
    .catch(error => {
      console.error('There was a problem with the Axios request:', error);
    })
}


