import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Textarea,
  Heading,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';

export default function AirportPickup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    whatsappNumber: '',
    nationality: '',
    arrivalDate: '',
    arrivalTime: '',
    airlineAndFlightNumber: '',
    cityArrivingFrom: '',
    departureTimeLastConnection: '',
    numberOfBags: '',
    numberOfPeople: '',
    namesOfPeople: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Enforce character limit for certain fields
    if (name === 'firstName' || name === 'lastName' || name === 'whatsappNumber') {
      if (value.length <= 25) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating an API call or any asynchronous operation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsAlertOpen(true);
    }, 2000); // Change this to match your actual API call or operation time
  };

  return (
    <Box width="80%" margin="0 auto">
      <Heading as="h1" textAlign="center" mb={4}>
        Airport Reception
      </Heading>
      <Text textAlign="center" mb={4}>
        We provide airport pickup services to customers who have booked accommodations with us. Below is the form customers can fill out in order for us to prepare for airport pickup. If you don't have any accommodations booked with us, you can also request an airport pickup. You will be charged a service fee.
      </Text>

      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <FormLabel fontWeight="bold">Personal Information</FormLabel>
          <FormControl>
            <FormLabel>Name *</FormLabel>
            <Input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Gender</FormLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              isRequired
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email *</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isRequired
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              w="30%"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>WhatsApp number</FormLabel>
            <Input
              type="tel"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              w="30%"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Nationality *</FormLabel>
            <Input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
          </FormControl>
        </Box>

        <Box mb={4}>
          <FormLabel fontWeight="bold">Flight Information</FormLabel>
          <FormControl>
            <FormLabel>Arrival Date *</FormLabel>
            <Input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleInputChange}
              isRequired
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Arrival Time *</FormLabel>
            <Input
              type="time"
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Airline and Flight Number *</FormLabel>
            <Input
              type="text"
              name="airlineAndFlightNumber"
              value={formData.airlineAndFlightNumber}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>City Arriving From (last connection) *</FormLabel>
            <Input
              type="text"
              name="cityArrivingFrom"
              value={formData.cityArrivingFrom}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Departure Time (last connection) *</FormLabel>
            <Input
              type="time"
              name="departureTimeLastConnection"
              value={formData.departureTimeLastConnection}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Number of Bags (not including carry ons) *</FormLabel>
            <Input
              type="number"
              name="numberOfBags"
              value={formData.numberOfBags}
              onChange={handleInputChange}
              isRequired
              w="30%"
            />
          </FormControl>
        </Box>

        <FormControl mb={4}>
          <FormLabel>Number of People (Each student must fill out a separate form) *</FormLabel>
          <Input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleInputChange}
            isRequired
            w="30%"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>If multiple people, please indicate their names:</FormLabel>
          <Textarea
            name="namesOfPeople"
            value={formData.namesOfPeople}
            onChange={handleInputChange}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={4} isLoading={isSubmitting}>
          Submit
        </Button>

        <AlertDialog isOpen={isAlertOpen} onClose={onCloseAlert}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Form Submitted
              </AlertDialogHeader>

              <AlertDialogBody>
                Thank you for submitting the form! We have received your information.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme="teal" onClick={onCloseAlert}>
                  Close
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </form>
    </Box>
  );
}
//AirportPickup.jsx