import React from 'react'
import { Card, Stack ,CardHeader, CardBody, CardFooter , Heading , Image, Text} from '@chakra-ui/react'


export default function TeamCard(props) {
  return (
<Card maxW='sm'>
  <CardBody>
    <Image
        src= {props.img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.name}</Heading>
      <Text>
        {props.exp}
      </Text>
    
    </Stack>
  </CardBody>
  
</Card>
  )
}
