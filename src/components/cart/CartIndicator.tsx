import React from 'react';
import { Box } from '@chakra-ui/react';

interface CartIndicatorProps {
  count: number;
}

export const CartIndicator: React.FC<CartIndicatorProps> = ({ count }) => {
  if (count === 0) return null;

  return (
    <Box
      position="absolute"
      top="1px"
      right="-1px"
      bg="red.500"
      color="white"
      borderRadius="full"
      w="20px"
      h="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="xs"
      fontWeight="bold"
    >
      {count}
    </Box>
  );
};
