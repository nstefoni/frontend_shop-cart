import React from 'react';
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { useCart } from '../hooks/useCart';
import { useShippingThreshold } from '../hooks/useShippingThreshold';
import { CartItemGroup } from '../components/CartItemGroup';
import { CartSummary } from '../components/CartSummary';

export const CartPage: React.FC = () => {
  const { cartItems, totalItems, totalPrice } = useCart();
  const { threshold, error } = useShippingThreshold();

  // if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;

  const groupedItems = cartItems.reduce((acc, item) => {
    const key = item.sellerName || 'vendedor desconocido';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof cartItems>);

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      p={4}
      maxWidth="1200px"
      margin="0 auto"
    >
      <Box flex={3} mr={{ base: 0, md: 8 }}>
        <Heading mb={4} size="lg">
          Carrito de compras
        </Heading>
        <VStack spacing={4} align="stretch">
          {Object.entries(groupedItems).map(([sellerName, items]) => (
            <CartItemGroup
              key={sellerName}
              sellerName={sellerName}
              items={items}
              freeShippingThreshold={threshold || 0}
            />
          ))}
        </VStack>
      </Box>
      <Box flex={1} maxWidth={{ base: '100%', md: '300px' }}>
        <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
      </Box>
    </Flex>
  );
};
