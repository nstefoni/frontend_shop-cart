import { useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../contexts';

export const useCart = () => {
  const context = useContext(CartContext);
  const toast = useToast();

  if (!context) {
    throw new Error('useCart se esta usando incorrectamente');
  }

  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } =
    context;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addProduct = addToCart;
  const changeQuantity = updateQuantity;

  const removeProduct = (productId: number) => {
    removeFromCart(productId);
    toast({
      title: 'Producto eliminado',
      description: 'El producto ha sido eliminado del carrito',
      status: 'warning',
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    cartItems,
    addProduct,
    removeProduct,
    changeQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
};
