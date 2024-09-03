export interface HeaderUiText {
  TITLE: string;
  CART_ARIA_LABEL: string;
  SEARCH_PLACEHOLDER: string; // Agrega esta línea
}

export const UI_TEXT = {
  ERRORS: {
    FETCH_PRODUCTS: 'No se pudieron cargar los productos.',
    FETCH_PRODUCT: 'No se pudo cargar el producto.',
    ADD_TO_CART: 'No se pudo agregar el producto al carrito.',
  },
  SUCCESS: {
    ADD_TO_CART: 'Se agrego tu producto al carrito.',
  },
  CART: {
    TITLE: 'Carrito de compras',
    EMPTY: 'Tu carrito está vacío',
    EMPTY_BUTTON: 'Vaciar Carrito',
    SUMMARY: 'Resumen de compra',
    PRODUCTS: 'Productos',
    TOTAL: 'Total',
  },
  PRODUCTS: {
    TITLE: 'Productos',
    ADD_TO_CART: 'Agregar al carrito',
  },
  HEADER: {
    TITLE: 'LittleShop',
    ICON_LABEL: 'Ver carrito',
  },
};
