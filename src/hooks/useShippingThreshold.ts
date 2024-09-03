import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export const useShippingThreshold = () => {
  const [threshold, setThreshold] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThreshold = async () => {
      try {
        const value = await productService.getShippingThreshold();
        setThreshold(value);
      } catch (err) {
        console.error('error shipping-threshold:', err);
        setError('error al obtener el umbral de envío gratuito');
      } finally {
        setLoading(false);
      }
    };

    fetchThreshold();
  }, []);

  return { threshold, loading, error };
};
