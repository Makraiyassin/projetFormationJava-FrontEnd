import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../../models/IUser";
import {IOmnitheque} from "../../../models/IOmnitheque";
import {OmnithequeService} from "../../../services/omnitheque.service";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../models/IProduct";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  omnitheque!: IOmnitheque;
  user!: IUser;

  constructor(
    private _omnithequeService : OmnithequeService,
    private _userService : UserService,
    private _route: ActivatedRoute,
    private _productService : ProductService,

  ) { }

  page = 1;
  pageSize = 5;
  collectionSize !: number;
  products !: IProduct[];

  ngOnInit(): void {
    this._userService.getUser().subscribe(data => {
      this.user = data;
    })
    if(this._route.snapshot.parent )
      this._omnithequeService.getOne(this._route.snapshot.parent.params["id"]).subscribe( data =>{
      this.omnitheque = data;
      this.collectionSize =  data.productList.filter(p=>p.quantity>0).length;
      this.refreshProducts();
    });
  }

  refreshProducts() {
    this.products = this.omnitheque.productList.filter(p=>p.quantity>0).slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize)
  }

  delete(id : number){
    this._productService.delete(id).subscribe(data=>{
      this.products = this.products.filter(p=>p.id != data.id)
    });
  }

}
