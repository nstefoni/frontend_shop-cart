import React from 'react';
import { Box, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import { formatCurrency } from '../../utils';

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  totalItems,
  totalPrice,
}) => {
  return (
    <Box
      borderWidth={1}
      borderRadius="lg"
      p={4}
      mt={14}
      bg="white"
      boxShadow="sm"
    >
      <Heading size="md" mb={4}>
        Resumen de compra:
      </Heading>
      <VStack spacing={3} align="stretch">
        <Flex justify="space-between">
          <Text>Productos ({totalItems})</Text>
        </Flex>
        <Flex justify="space-between" fontWeight="bold" fontSize="lg">
          <Text>Total</Text>
          <Text>{formatCurrency(totalPrice)}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};
