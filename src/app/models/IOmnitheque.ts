import {IAddress} from "./IAddress";
import {IProduct} from "./IProduct";
import {IBorrow} from "./IBorrow";

export interface IOmnitheque {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: IAddress;
  productList: IProduct[];
  borrowList: any[]
}
