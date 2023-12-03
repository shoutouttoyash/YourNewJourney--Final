import React from 'react'
import { Card, Stack ,CardHeader, CardBody, CardFooter , Heading , Image, Text, Center} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export default function ServiceCard(props) {
    
  return (
    
   < Card  style={{ width: '300px' , height:'400px'  }} align='center' size= 'lg'  >

    
    
    <CardBody >
        
        
        <Image
      style={{ width : '200px' , height: '200px'}}
          src= {props.img}
        
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{props.name}</Heading>
        <Text>
          {props.txt}
        </Text>
      
      </Stack>


    </CardBody>
    
  </Card>
  )
}
