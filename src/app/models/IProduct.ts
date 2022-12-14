import {IBorrow} from "./IBorrow";

export interface IProduct {
  id: number;
  name: string;
  category: string;
  quantity: number;
  description: string;
  image: string;
  omnithequeId: number;
  borrowList: IBorrow[];
}
