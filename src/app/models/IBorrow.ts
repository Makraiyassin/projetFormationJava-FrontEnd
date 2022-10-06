export interface IBorrow {
  id: number;
  startBorrow: string;
  endBorrow: string;
  returned: boolean;
  productId: number;
  userId: number;
  omnithequeId: number;
}
