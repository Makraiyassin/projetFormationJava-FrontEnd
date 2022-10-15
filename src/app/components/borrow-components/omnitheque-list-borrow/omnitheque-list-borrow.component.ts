import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../models/IUser";
import {IBorrow} from "../../../models/IBorrow";
import {OmnithequeService} from "../../../services/omnitheque.service";
import {IOmnitheque} from "../../../models/IOmnitheque";
import {ActivatedRoute} from "@angular/router";
import {BorrowService} from "../../../services/borrow.service";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-omnitheque-list-borrow',
  templateUrl: './omnitheque-list-borrow.component.html',
  styleUrls: ['./omnitheque-list-borrow.component.css']
})
export class OmnithequeListBorrowComponent implements OnInit {

  constructor(
    private _omnithequeService : OmnithequeService,
    private _borrowService : BorrowService,
    private _userService : UserService,
    private _productService : ProductService,
    private _route : ActivatedRoute,
  ) {  }

  page = 1;
  pageSize = 5;
  collectionSize !: number;

  omnitheque !: IOmnitheque;
  user !: IUser;
  borrows !: IBorrow[];

  ngOnInit(): void {
    this._userService.getUser().subscribe(data => {
      this.user = data;
    })

    if(this._route.snapshot.parent ){
      this._omnithequeService.getOne(this._route.snapshot.parent.params["id"]).subscribe(
        data=> {
          this.omnitheque = data
          this.borrows = data.borrowList
          this.borrows.map(b=>this._productService.getOne(b.productId).subscribe(data=> b.product=data))
          this.collectionSize =  this.borrows.length;
          this.refreshBorrows();
        }
      )
    }

  }

  refreshBorrows() {
    this.borrows = this.omnitheque.borrowList.slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize)
  }
  return(borrow : IBorrow) {
    if(confirm(`êtes vous sûr de vouloir valider le retour de ${borrow.product.name}?`)){
      this._borrowService.return(borrow.id).subscribe(data=>{
        this.borrows.find( b => b.id === borrow.id)!.returned = true
      });
    }
  }

}
