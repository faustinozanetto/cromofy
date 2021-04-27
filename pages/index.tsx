import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { SEO } from '../components/seo';

const Home = ({}) => {
  return (
    <>
      <SEO title='Home | Faustino Zanetto' />
      <Box padding={4}>
        <VStack display='flex'>
          {/* Title */}
          <Box>
            <Heading fontSize='4xl'>Cromofy</Heading>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
