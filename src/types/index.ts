export interface IProduct {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  availableQuantity: number;
  sellerName?: string;
  sellerId?: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ISeller {
  id: number;
  name: string;
  // Eliminamos freeShippingThreshold de aquí
}

export interface ICartItemGroup {
  seller?: ISeller;
  items: ICartItem[];
  totalPrice: number;
}
