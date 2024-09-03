import React from 'react';
import {
  Flex,
  Image,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { ICartItem as CartItemType } from '../types';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { changeQuantity, removeProduct } = useCart();

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Image
        src={item.thumbnail}
        alt={item.name}
        boxSize="100px"
        objectFit="cover"
        mr={4}
      />
      <Flex direction="column" flex={1}>
        <Text fontWeight="bold">{item.name}</Text>
        <Flex>
          <Button
            size="sm"
            variant="link"
            colorScheme="blue"
            onClick={() => removeProduct(item.id)}
          >
            Eliminar
          </Button>
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="flex-end">
        <NumberInput
          value={item.quantity}
          min={1}
          max={item.availableQuantity}
          onChange={(_, value) => changeQuantity(item.id, value)}
          size="sm"
          maxW="100px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text fontWeight="bold" mt={2}>
          {formatCurrency(item.price * item.quantity)}
        </Text>
      </Flex>
    </Flex>
  );
};
