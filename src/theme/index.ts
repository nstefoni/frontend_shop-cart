import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#ffe600',
    },
    secondary: {
      500: '#3483fa',
    },
    gray: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
    },
  },
  fonts: {
    body: 'Proxima Nova, sans-serif',
    heading: 'Proxima Nova, sans-serif',
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'black',
          _hover: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          color: 'primary.500',
          _hover: {
            bg: 'primary.50',
          },
        },
      },
    },
  },
});

export default theme;
