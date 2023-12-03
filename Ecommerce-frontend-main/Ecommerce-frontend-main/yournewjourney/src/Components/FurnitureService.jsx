import React from 'react'
import { accomodation } from './data'
import { Center , Flex, Box} from '@chakra-ui/react'
import AccomodationCard from './AccomodationCard'
import { useRecoilState } from 'recoil'
import { cartState } from './StateManage'
import FurnitureCard from './FurnitureCard'


export default function FurnitureService() {
  
    return(

        <>
           
            <div id="check">
            <Center>
                <Flex justify="space-between" flexWrap="wrap" m={10} >
                
                {
                   

                accomodation.furniture.map((item) => 
                
                            
                  ( <Box flex="1" marginTop="10" marginRight="2" marginBottom={"2"}><FurnitureCard id={item.id} img={item.imageLink} name={item.name} desc={item.description} price={item.price} condition={item.condition} /></Box>) )
                }
                </Flex >
            </Center>
            </div>
        </>

    
  )
}
