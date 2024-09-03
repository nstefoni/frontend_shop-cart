import { api } from './api';
import { IProduct } from '../types';
import { UI_TEXT } from '../constants/uiText';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const productService = {
  getAllProducts: async (): Promise<IProduct[]> => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error('failed fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error('error fetching products:', error);
      throw error;
    }
  },

  getProductById: async (id: number, token: string): Promise<IProduct> => {
    try {
      return await api.get<IProduct>(`/products/${id}`, token);
    } catch (error) {
      console.error(`error fetching product ID ${id}:`, error);
      throw new Error(UI_TEXT.ERRORS.FETCH_PRODUCT);
    }
  },

  getShippingThreshold: async (): Promise<number> => {
    try {
      const response = await fetch(`${API_URL}/shipping-threshold`);
      if (!response.ok) {
        throw new Error('shipping-threshold error');
      }
      const data = await response.json();
      return data.freeShippingThreshold;
    } catch (error) {
      console.error('shipping-threshold error:', error);
      throw error;
    }
  },
};
