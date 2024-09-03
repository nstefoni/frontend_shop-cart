import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { IProduct } from '../types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} justifyItems="center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
