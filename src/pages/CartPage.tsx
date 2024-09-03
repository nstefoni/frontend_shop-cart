import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useCart } from '../hooks/useCart';
import { useShippingThreshold } from '../hooks/';
import { CartItemGroup, CartSummary } from '../components/cart/';
import { LoadingModal } from '../components/common/';
import { useAuth } from '../contexts';

export const CartPage: React.FC = () => {
  const { cartItems, totalItems, totalPrice } = useCart();
  const { threshold, error } = useShippingThreshold();
  const { logout } = useAuth();
  const { onOpen, onClose, isOpen } = useDisclosure();

  if (error) return <Text color="red.500">{error}</Text>;

  const groupedItems = cartItems.reduce((acc, item) => {
    const key = item.sellerName || 'vendedor desconocido';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof cartItems>);

  const handleLogout = async () => {
    onOpen();

    try {
      logout();
    } catch (error) {
      throw new Error('logout error');
    } finally {
      onClose();
    }
  };

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
      <VStack align="initial">
        <Box flex={1} maxWidth={{ base: '100%', md: '300px' }}>
          <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
        </Box>
        <Box flex={4}>
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            onClick={handleLogout}
          >
            Logout
          </Button>{' '}
        </Box>
      </VStack>
      <LoadingModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
