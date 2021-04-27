import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  const background = useColorModeValue('black', 'white');
  return (
    <Box d='flex' width='100px' justifyContent='center'>
      <Heading fontSize='2xl'>Cromofy</Heading>
    </Box>
  );
};
