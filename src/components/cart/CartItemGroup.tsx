import React, { useMemo } from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { CartItem } from './CartItem';
import { FreeShippingProgress } from './FreeShippingProgress';
import { ICartItem } from '../../types';
import { formatCurrency } from '../../utils';

interface CartItemGroupProps {
  sellerName: string;
  items: ICartItem[];
  freeShippingThreshold: number;
}

export const CartItemGroup: React.FC<CartItemGroupProps> = ({
  sellerName,
  items,
  freeShippingThreshold,
}) => {
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Text fontWeight="bold" mb={4}>
        Productos de {sellerName}
      </Text>
      <VStack spacing={4} align="stretch">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </VStack>
      <Text mt={4} fontWeight="bold">
        Subtotal: {formatCurrency(subtotal)}
      </Text>
      <FreeShippingProgress
        currentTotal={subtotal}
        freeShippingThreshold={freeShippingThreshold}
        sellerName={sellerName}
      />
    </Box>
  );
};
