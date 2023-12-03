import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Appointment() {
  let navi= useNavigate()
  return (
    <>
    <div style={ { display : 'flex '  ,alignItems: "center",  flexDirection: "column"}}>
    <Text  p="8" fontSize={ "5xl"}>Book an Appointment</Text>
    <div   style={{ paddingTop: 30 ,width: 700}}>
    <Text fontSize={ "2xl"}>Booking an appointment with YourNewJourney is easy and convenient. Simply fill out our online booking form or give us a call at 1-800-123-4567 to speak with one of our representatives. 
        We look forward to helping you embark on your new journey!</Text>
       
    </ div>
    <Button  onClick={()=> { navi("/Appointment/BookingPage")}} mt="16"Color={"#333"}> Book Now</Button>
    </div>
    </>
  )
}
