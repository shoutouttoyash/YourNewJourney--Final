import React from 'react';
import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error(error.message);
      } else {
        // Handle successful payment (e.g., send paymentMethod.id to your backend to process the payment)
        console.log('PaymentMethod:', paymentMethod);
      }
    } catch (error) {
      console.error('Payment failed. Please try again.', error);
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="cardNumber">Card number</FormLabel>
          <CardElement id="cardNumber" options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#000',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }} />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="expiry">Expiry date</FormLabel>
          <Input type="text" id="expiry" placeholder="MM / YY" size="sm" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="cvc">CVC</FormLabel>
          <Input type="text" id="cvc" placeholder="CVC" size="sm" />
        </FormControl>

        <Button type="submit" colorScheme="blue" size="md" width="100%">
          Pay Now
        </Button>
      </form>
    </Box>
  );
};

export default PaymentForm;
