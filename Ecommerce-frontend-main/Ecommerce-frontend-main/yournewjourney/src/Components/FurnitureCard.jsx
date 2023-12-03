import React, { useEffect, useState } from 'react'
import { Card, Stack, CardHeader, CardBody, CardFooter, Heading, Image, Text, Center, Divider, ButtonGroup, Button, Box, Badge, Container } from '@chakra-ui/react'
import { Alert, AlertDescription, AlertDialog, AlertDialogContent, AlertIcon, AlertTitle } from '@chakra-ui/react'

import { useRecoilState } from 'recoil';
import { cartState } from './StateManage';


export default function FurnitureCard(props) {

  const [cart, setCart] = useRecoilState(cartState);
  
  const [showAlert, setShowAlert] = useState(false);

  console.log(props)
  const handleAddToCart = () => {
    // Logic to add the item to the cart
    const newItem = { id: props.id, name: props.name, price: props.price, img: props.img, desc: props.desc, condition: props.condition };
    setCart([...cart, newItem]);
    setShowAlert(true)
    console.log(cart)
  };
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);


  return (

    <Box p={2} style={{ width: '300px', height: '440px' }} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={props.img}
        height={200}
        width={300}

        //             alt='Green double couch with wooden legs'
        borderRadius='lg' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {props.name}
        </Box>

        <Box>
          ${props.price}
          <Box as='span' color='gray.600' fontSize='sm'>

          </Box>
          <Box>
            <Text>Condition : {props.condition} </Text>
          </Box>
          <Box as='span' color='gray.600' fontSize='sm'>

          </Box>
        </Box>
        <Box>
          <Button variant='ghost' mt={10} backgroundColor="gray.300" onClick={() => {
            handleAddToCart();
         
          }} >
            Add to cart
          </Button>
          <Container>
            <AlertDialog isOpen={showAlert} onClose={() => setShowAlert(false)} motionPreset="slideInBottom">

              <AlertDialogContent>

                <Alert
                  status='success'
                  variant='subtle'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  textAlign='center'
                  height='100%'
                >
                  <AlertIcon boxSize='40px' mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Item Added!
                  </AlertTitle>
                  {/* <AlertDescription maxWidth='sm'>
                                                Thanks for submitting your application. Our team will get back to you soon.
                                            </AlertDescription> */}
                </Alert>

              </AlertDialogContent>

            </AlertDialog>
          </Container>


        </Box>


      </Box>
    </Box>
  )
}


