import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const Resume = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    experience: '',
    resumeFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resumeFile: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission, e.g., send data to the server
    console.log('Form submitted with data:', formData);
  };

  return (
    <Box width="80%" margin="0 auto">
      <Heading as="h1" textAlign="center" mb={4}>
        Resume Building
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>First Name *</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            isRequired
            w="30%"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Last Name *</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            isRequired
            w="30%"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Phone Number *</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            isRequired
            w="30%"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Experience *</FormLabel>
          <Textarea
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            isRequired
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Upload your existing Resume</FormLabel>
          <InputGroup>
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
            />
            <InputRightElement width="6rem">
              <Button
                h="1.75rem"
                size="sm"
                colorScheme="teal"
                type="button"
                onClick={() => {}}
              >
                Upload
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Resume;
//ResumeBuilding.jsx