import React, { useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { productService } from '../services/productService';
import { IProduct } from '../types';
import ProductList from '../components/ProductList';

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await productService.getAllProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('error fetching products:', err);
        setError('error loading products.');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <Box color="red.500">{error}</Box>;
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={8}>Productos</Heading>
      <ProductList products={products} />
    </Container>
  );
};
