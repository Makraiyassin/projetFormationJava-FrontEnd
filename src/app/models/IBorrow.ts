export interface IBorrow {
  id: number;
  startBorrow: string;
  endBorrow: string;
  returned: boolean;
  productId: string;
  userId: number;
  omnithequeId: number;
}
