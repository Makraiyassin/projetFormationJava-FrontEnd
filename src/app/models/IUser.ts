import {IAddress} from "./IAddress";
import {IOmnitheque} from "./IOmnitheque";
import {IBorrow} from "./IBorrow";


export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: IAddress;
  omnitheque: IOmnitheque;
  borrowList: IBorrow[];
}
