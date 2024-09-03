import React from 'react';
import { Box, Text, Progress } from '@chakra-ui/react';
import { formatCurrency } from '../utils/formatCurrency';

interface FreeShippingProgressProps {
  currentTotal: number;
  freeShippingThreshold: number;
  sellerName: string;
}

export const FreeShippingProgress: React.FC<FreeShippingProgressProps> = ({
  currentTotal,
  freeShippingThreshold,
  sellerName,
}) => {
  const remaining = Math.max(0, freeShippingThreshold - currentTotal);
  const progress = Math.min(100, (currentTotal / freeShippingThreshold) * 100);
  const isFreeShipping = currentTotal >= freeShippingThreshold;

  return (
    <Box mt={4}>
      <Progress
        value={progress}
        colorScheme={isFreeShipping ? 'green' : 'blue'}
        size="sm"
        mb={2}
      />
      <Text fontSize="sm">
        {isFreeShipping
          ? 'Envío gratis'
          : `Agrega ${formatCurrency(
              remaining
            )} en productos de ${sellerName} para conseguir envío gratis`}
      </Text>
    </Box>
  );
};
