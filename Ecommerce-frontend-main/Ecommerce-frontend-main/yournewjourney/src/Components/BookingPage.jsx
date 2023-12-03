

import React, { useState } from 'react';
import { AlertDescription, AlertDialogBody, AlertDialogOverlay, AlertTitle, Button, Center, Container, FormControl, FormLabel, Input, Stack, Switch, Text, VStack } from '@chakra-ui/react';
import { Alert, AlertIcon, AlertDialog, AlertDialogContent, useDisclosure, CloseButton } from '@chakra-ui/react';


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        selectedDate: null,
        selectedTime: '',
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            selectedDate: date,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Center>
        <VStack align="start" spacing={8} p={8}>
            <Text fontSize="3xl">Booking Page</Text>
           
            <form  onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Stack  w={250}  spacing={4}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </FormControl>

                    {/* <FormControl isRequired>
                        <FormLabel>Date</FormLabel>
                        <div style={{ border: '1px solid black' }}>  
                        <DatePicker
                            selected={formData.selectedDate}
                            onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                            style={{ border: '1px solid black' }}
                        />
                        </div>
                    </FormControl> */}
                    <FormControl isRequired>
                        <FormLabel>Select Date</FormLabel>
                        <Input type="date" name="selectedTime" value={formData.selectedTime} onChange={handleDateChange} />
                    </FormControl>

                    <Center>
                    <Button type="submit" w={150} colorScheme="teal" mt={4}>
                        Submit
                    </Button>
                    </Center>

                    <AlertDialog isOpen={showAlert} onClose={() => setShowAlert(false)} motionPreset="slideInBottom">

                        <AlertDialogContent>

                            <Alert
                                status='success'
                                variant='subtle'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'
                                textAlign='center'
                                height='100%'
                            >
                                <AlertIcon boxSize='40px' mr={0} />
                                <AlertTitle mt={4} mb={1} fontSize='lg'>
                                    Application submitted!
                                </AlertTitle>
                                <AlertDescription maxWidth='sm'>
                                    Thanks for submitting your application. Our team will get back to you soon.
                                </AlertDescription>
                            </Alert>

                        </AlertDialogContent>

                    </AlertDialog>
                </Stack>
                
            </form>
       
        </VStack>
        </Center>
        
    );
};

export default BookingPage;
//Bookingpage.jsx 