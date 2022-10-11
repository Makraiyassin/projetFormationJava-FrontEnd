import {IAddress} from "./IAddress";
import {IProduct} from "./IProduct";
import {IBorrow} from "./IBorrow";
import {IPost} from "./IPost";

export interface IOmnitheque {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: string
  address: IAddress;
  productList: IProduct[];
  postList: IPost[];
  borrowList: IBorrow[]
}
