import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../../models/IUser";
import {IOmnitheque} from "../../../models/IOmnitheque";
import {OmnithequeService} from "../../../services/omnitheque.service";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../models/IProduct";
import {ProductService} from "../../../services/product.service";
import {BorrowService} from "../../../services/borrow.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product-omnitheque.component.html',
  styleUrls: ['./list-product-omnitheque.component.css']
})
export class ListProductOmnithequeComponent implements OnInit {

  constructor(
    private _omnithequeService : OmnithequeService,
    private _userService : UserService,
    private _route: ActivatedRoute,
    private _productService : ProductService,
    private _borrowService: BorrowService
  ) { }

  omnitheque!: IOmnitheque;
  user!: IUser;
  products !: IProduct[];

  page = 1;
  pageSize = 5;
  collectionSize !: number;

  ngOnInit(): void {
    this._userService.getUser().subscribe(data => {
      this.user = data;
    })
    if(this._route.snapshot.parent ){
      this._omnithequeService.getOne(this._route.snapshot.parent.params["id"]).subscribe( data =>{
        this.omnitheque = data;
        this.collectionSize =  data.productList.filter(p=>p.quantity>0).length;
        this.refreshProducts();
      });
    }
  }

  refreshProducts() {
    this.products = this.omnitheque.productList.filter(p=>p.quantity>0).slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
  }

  delete(id : number){
    this._productService.delete(id).subscribe(data=>{
      this.products = this.products.filter(p=>p.id != data.id);
    });
  }

  borrow(productId : number ){
    this._borrowService.create(this.omnitheque.id,productId).subscribe(
      result => {
        // Handle result
        console.log(result)
      },
      error => {
        console.log(error.error.message)
      },
    );
  }

}
