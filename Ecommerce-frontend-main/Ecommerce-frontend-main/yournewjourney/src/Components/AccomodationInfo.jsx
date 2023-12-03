import React, { useEffect , useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, currentItem } from './StateManage'
import { Badge, Box, Button, Center, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Carousel from './Caraousel'
import { BsFillStarFill } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { Alert, AlertDescription, AlertDialog, AlertDialogContent, AlertIcon, AlertTitle } from '@chakra-ui/react'


// Importing an icon from react-icons library
import { FaStar } from 'react-icons/fa'; // Another option from react-icons library


export default function AccomodationInfo(props) {
  const [cart, setCart] = useRecoilState(cartState);
  const [item, setItem] = useRecoilState(currentItem)
  const [showAlert, setShowAlert] = useState(false);


  const handleAddToCart = () => {


    const newItem = { id: item[0].info.hotel_id, Name: item[0].info.hotel_name, price: item[0].info.rates_from, img: item[0].info.photo1, desc: item[0].info.overview };
    console.log(item)
    console.log(newItem)
    setCart([...cart, newItem]);



  };
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  const imgs = [item[0].info.photo1, item[0].info.photo2, item[0].info.photo3, item[0].info.photo4]

  return (
    <>
      <Center>
        <Text mb={10} mt={5} fontSize={"2xl"}>{item[0].info.hotel_name}</Text>
      </Center>
      <Box>

        <Carousel images={imgs} /></Box>
      <Center>
        <Box w={600} style={{ display: "flex", flexDirection: "column" }}>


          <Text >Ratings: {item[0].info.star_rating}  <Icon as={BsFillStarFill} color="gold" boxSize={3} /> </Text>
          <Text >{item[0].info.overview}</Text>
          <Center>
            <Button w={200} variant='ghost' mt={10} backgroundColor="gray.300" onClick={() => {
              handleAddToCart();
              setShowAlert(true)
              
            }} >
              Add to cart
            </Button>
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
          </Center>


        </Box>
      </Center>
    </>

  )
}
