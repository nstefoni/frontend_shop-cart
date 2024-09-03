import React from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useTheme,
  HStack,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { UI_TEXT } from '../constants/uiText';
import { CartIndicator } from './CartIndicator';

export const Header: React.FC = () => {
  const theme = useTheme();
  const { totalItems } = useCart();

  return (
    <Box as="header" bg={theme.colors.blue[400]} py={4} boxShadow="md">
      <Flex
        maxW="container.xl"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to="/">
          <Heading as="h1" size="lg" color="white" fontWeight="bold">
            {UI_TEXT.HEADER.TITLE}
          </Heading>
        </Link>
        <HStack spacing={4}>
          <Link to="/cart">
            <HStack position={'relative'}>
              <IconButton
                aria-label={UI_TEXT.HEADER.ICON_LABEL}
                icon={<FiShoppingCart />}
                variant="ghost"
                color="white"
                size="lg"
                _hover={{
                  bg: 'transparent',
                  transform: 'none',
                  color: 'inherit',
                }}
              />
              <CartIndicator count={totalItems} />
            </HStack>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};
