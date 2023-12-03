import { useState } from 'react';
import { Box, Flex, Image, IconButton, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <Box >
      <Flex justify="center" align="center" mb={4}>
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          onClick={goToPreviousSlide}
          mr={2}
        />
        <Image w={300} h={300} src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          onClick={goToNextSlide}
          ml={2}
        />
      </Flex>
    
    </Box>
  );
};

export default Carousel;
