import React from 'react'

import { CloseButton, Flex, Link, Select, useColorModeValue , Text} from '@chakra-ui/react'
import { CartMeta } from './CardMeta'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, currentItem } from './StateManage'

export default function CartItem(props) {

    console.log(props)

    let [cart,setCart]= useRecoilState(cartState)
  
  return (
 
    
        <Flex
          direction={{
            base: 'column',
            md: 'row',
          }}
          justify="space-between"
          align="center"
        >   
          <CartMeta
       Name={props.Name}
        description={props.desc}
        image={props.img}
        
      />   
          <Flex
            width="full"
            justify="space-between"
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            {/* <QuantitySelect
              value={quantity}
              onChange={(e) => {
                onChangeQuantity?.(+e.currentTarget.value)
              }}
            /> */}
            <Text > {props.price}</Text>
            <CloseButton aria-label={`Delete ${name} from cart`} onClick={()=> {
               
          
               const newArray = cart.filter(item => item.id !== props.id);
               console.log(newArray)
               setCart(newArray)

             }}  />
          </Flex>
    
        
        </Flex>
      )
  
}
function delteItem(){


}

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

