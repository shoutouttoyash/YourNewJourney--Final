import React from 'react'
import { accomodation } from './data'
import { Center , Flex, Box} from '@chakra-ui/react'
import AccomodationCard from './AccomodationCard'
import { useRecoilState } from 'recoil'
import { cartState } from './StateManage'

export default function Accomodation() {
    
    
    return (
        <>
           
            <div id="check">
            <Center>
                <Flex justify="space-evenly" flexWrap="wrap" m={10} >
                
                {
                   

                accomodation.hotels.map((hotel) => 
                            
                  ( <Box flex="1" marginTop="10" marginRight="2" marginBottom={"2"}><AccomodationCard fullInfo={hotel} id={hotel.hotel_id} img={hotel.photo1} name={hotel.hotel_name} desc={hotel.overview} price={hotel.rates_from} condition=""/></Box>) )
                }
                </Flex >
            </Center>
            </div>
        </>

    )
}
