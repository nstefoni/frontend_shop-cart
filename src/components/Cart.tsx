import React, { useMemo } from 'react';
import { VStack, Heading, Text, Button, Spinner } from '@chakra-ui/react';
import { useCart } from '../hooks/useCart';
import { useShippingThreshold } from '../hooks/useShippingThreshold';
import { CartItemGroup } from './CartItemGroup';
import { formatCurrency } from '../utils/formatCurrency';
import { UI_TEXT } from '../constants/uiText';
import { ICartItem } from '../types';

export const Cart: React.FC = () => {
  const { cartItems, clearCart, totalPrice } = useCart();
  const { threshold, error } = useShippingThreshold();

  const groupedItems = useMemo(() => {
    const grouped: { [key: string]: ICartItem[] } = {};
    cartItems.forEach((item) => {
      const key = `${item.sellerId}-${item.sellerName}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(item);
    });
    return grouped;
  }, [cartItems]);

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  if (cartItems.length === 0) {
    return <Heading size="md">{UI_TEXT.CART.EMPTY}</Heading>;
  }

  return (
    <VStack spacing={4} align="stretch">
      <Heading size="lg">{UI_TEXT.CART.TITLE}</Heading>
      {Object.entries(groupedItems).map(([key, items]) => (
        <CartItemGroup
          key={key}
          items={items}
          sellerName={key}
          freeShippingThreshold={threshold || 0}
        />
      ))}
      <Text fontWeight="bold" fontSize="xl">
        {UI_TEXT.CART.TOTAL} {formatCurrency(totalPrice)}
      </Text>
      <Button colorScheme="blue" onClick={clearCart}>
        {UI_TEXT.CART.EMPTY_BUTTON}
      </Button>
    </VStack>
  );
};
