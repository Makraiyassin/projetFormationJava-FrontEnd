import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {UserService} from "../../../services/user.service";
import {IProduct} from "../../../models/IProduct";
import {IBorrow} from "../../../models/IBorrow";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-borrow-user',
  templateUrl: './profile-list-borrow.component.html',
  styleUrls: ['./profile-list-borrow.component.css']
})
export class ProfileListBorrowComponent implements OnInit {

  constructor(
    private _userService : UserService,
    private _productService : ProductService,
  ) {
  }

  page = 1;
  pageSize = 5;
  collectionSize !: number;

  user !: IUser;
  borrows !: IBorrow[];

  ngOnInit(): void {
    this._userService.getUser().subscribe(
      data=> {
        this.user = data
        this.borrows = data.borrowList.filter(b => !b.returned )
        this.borrows.map(b=>this._productService.getOne(b.productId).subscribe(data=> b.product=data))
        this.collectionSize =  this.borrows.length;
        this.refreshBorrows();
      }
    )
  }

  refreshBorrows() {
    this.borrows = this.user.borrowList.filter(b=>!b.returned).slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize)
  }

}
