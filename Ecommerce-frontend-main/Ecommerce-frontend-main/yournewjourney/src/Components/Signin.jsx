import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react';
import { Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/Signup');
  };

  return (
    <Center m={10}>
      <SignIn
        signUpUrl="SignUp" // Redirect to '/Signup' when sign-up link is clicked
        afterSignInUrl="/"
        routing='path'  // Redirect after successful sign-in
        path="/signup"
      />
    </Center>
  );
}

// signUpUrl="/Signup" 
