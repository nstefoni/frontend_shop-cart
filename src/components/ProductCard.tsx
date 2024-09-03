import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { IProduct } from '../types';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import { UI_TEXT } from '../constants/uiText';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addProduct } = useCart();
  const toast = useToast();

  const handleAddToCart = () => {
    try {
      addProduct(product);
      toast({
        title: UI_TEXT.SUCCESS.ADD_TO_CART,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('error al agregar el producto al carrito:', error);
      toast({
        title: UI_TEXT.ERRORS.ADD_TO_CART,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image
        src={product.thumbnail}
        alt={product.name}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <VStack align="start" spacing={2} mt={4}>
        <Text fontSize="xl" fontWeight="semibold" noOfLines={1}>
          {product.name}
        </Text>
        <Flex align="baseline">
          <Text fontSize="2xl" fontWeight="bold">
            {formatCurrency(product.price)}
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500" my={2}>
          Enviado por {product.sellerName}
        </Text>
        <Button colorScheme="blue" width="full" onClick={handleAddToCart}>
          {UI_TEXT.PRODUCTS.ADD_TO_CART}
        </Button>
      </VStack>
    </Box>
  );
};
