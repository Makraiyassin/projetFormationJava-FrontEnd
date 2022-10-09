import {IProduct} from "./IProduct";

export interface IBorrow {
  id: number;
  startBorrow: string;
  endBorrow: string;
  returned: boolean;
  productId: number;
  product: IProduct;
  userId: number;
  omnithequeId: number;
}
