import React from 'react'
import ServiceCard from './ServiceCard'
import { Box, Center, Container, Flex, Text } from '@chakra-ui/react'
import Acco from "./Images/Accomodations.jpg";
import Air from "./Images/Airport.jpg";
import fur from "./Images/Furniture.jpg";
;
import resume from "./Images/Resume.jpg";
import couns from "./Images/Counselling.jpg";
import { useNavigate } from 'react-router-dom';

import { ChakraProvider, FormControl, FormLabel, Input, Textarea, Button, VStack } from '@chakra-ui/react';

export default function Services() {

  const navigate = useNavigate()

  return (
    <>
      <Text fontSize='3xl' style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 40 }}>Our Services</Text>

      <Center>
        <div style={{ width: 800 }}>
          < Flex direction="row" justify="space-around" align="center" flexWrap={'wrap'}>
            <div style={{ margin: 20 }}   onClick={() => navigate("/Airportpickup")} > <ServiceCard img={Air} name="Airport Pickup" txt="Safe and reliable airport pickup service." /> </div>
            <div style={{ margin: 20 }}  onClick={() => navigate("/Accomodation")} > <ServiceCard img={Acco} name="Accommodations" txt="Comfortable accommodations for your stay." /> </div>
            <div style={{ margin: 20 }} onClick={() => navigate("/Furniture")} > <ServiceCard img={fur} name="Furniture Delivery " txt="Efficient delivery of your furniture." /> </div>
            <div style={{ margin: 20 }} onClick={() => { navigate("/Resume") }}> <ServiceCard img={resume} name="Resume Building" txt="Professional resume building services." /> </div>
            <div style={{ margin: 20 }}  onClick={() => navigate("/Furniture")}  > <ServiceCard img={couns} name="Guidance and Counselling" txt="xpert guidance and counseling for your journey." /> </div>
          </Flex>
        </div>
      </Center>
    <Center mb={10}>
      <Box w={800}>

        
          <Text fontSize='2xl' >Our team at YourNewJourney is committed to providing our clients with the highest quality service and support. Our personalized approach means that we take the time to understand your needs and provide solutions that are tailored to your specific
            situation. From start to finish, we are with you every step of the way, ensuring that your goals are met and your expectations are exceeded.</Text>
   
      </Box>
      </Center>

      <div style={{ backgroundColor: "#f4f4f4" }} >
        <Container>


          <Text fontSize={'5xl'} >Get a Quote</Text>
          <VStack spacing={4} p={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button onClick={() => { Alert("item added") }} colorScheme="blue" size="md">
              Submit
            </Button>
          </VStack>
        </Container>
      </div>
    </>
  )
}
