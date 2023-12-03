import React, { useEffect, useState } from 'react'
import { ChakraProvider, Flex, Image, Link, Text, Box, Container } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Logo from "./Images/Logo.jpg"
import { UserButton, useSession } from '@clerk/clerk-react';
import { useSignIn } from "@clerk/clerk-react";

export default function Navigation() {
    let navigate = useNavigate();
    // const { isLoaded, signIn , isSignedIn, isSignedOut} = useSignIn();
    const { isLoaded, session, isSignedIn } = useSession();

    const [isLogged, setIsLogged] = useState(false);

    const handleSignInLoad = () => {
        // This function can be used to indicate loading while SignIn component is being loaded/rendered
        setIsLogged(true);
    };

    const handleSignInUnload = () => {
        // This function can be used when SignIn component is unloaded
        setIsLogged(false);
    };








    return (
        <div style={{ backgroundColor: "#333", height: 300 }}>

            <Flex
                as="nav"
                align="center"
                justify="center"
                padding="1rem"
                direction={"column"}
                color="white"
            >
                <div >


                    <Image src={Logo} style={{ height: 100, width: 200 }} alt='Dan Abramov' />
                </div>


                <Flex align="center" style={{ paddingTop: 100 , cursor:  'pointer' }}>

                    <div onClick={() => navigate('/Home')} style={{ marginRight: 15 }}>
                        <Text fontSize='2xl' >Home</Text>
                    </div>

                    <div onClick={() => navigate('/Services')} style={{ marginRight: 15 }} >
                        <Text fontSize='2xl' >Our Services</Text>
                    </div>

                    <div onClick={() => navigate('/Appointment')} style={{ marginRight: 15 }} >
                        <Text fontSize='2xl' >Book Appointment</Text>
                    </div>

                    <div onClick={() => navigate('/About')} style={{ marginRight: 15 }} >

                        <Text fontSize='2xl' >About Us</Text>
                    </div>


                    <div onClick={() => navigate('/Shop')} style={{ marginRight: 15 }} >
                        <Text fontSize='2xl' >Shopping Cart</Text>
                    </div>
                    {isSignedIn ?
                        <Box boxSize={10}>
                        <UserButton  afterSignOutUrl="/" onSignInLoad={handleSignInLoad} onSignInUnload={handleSignInUnload} />  </Box>: <div onClick={() => navigate('/Signin')} style={{ marginRight: 15 }}>
                            <Text fontSize='2xl' >Login</Text>
                        </div>
                    }

                </Flex>
            </Flex>

        </div>
    );
}







