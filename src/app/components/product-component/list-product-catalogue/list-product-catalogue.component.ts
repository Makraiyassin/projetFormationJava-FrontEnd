import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../models/IProduct";
import {ProductService} from "../../../services/product.service";
import {IOmnitheque} from "../../../models/IOmnitheque";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-product-catalogue',
  templateUrl: './list-product-catalogue.component.html',
  styleUrls: ['./list-product-catalogue.component.css']
})
export class ListProductCatalogueComponent implements OnInit {

  private _productList!: IProduct[];

  constructor(
    private _productService : ProductService,
    private _route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot)
    if(this._route.snapshot.url[0].path == "catalogue") this._productService.getAll().subscribe(
      data => {
        this._productList = data
        this.collectionSize =  this._productList.length;
        this.refreshProducts();
      }
    )
    else if(this._route.snapshot.url[0].path == "search") this._productService.search(this._route.snapshot.params["name"]).subscribe(
      data => {
        this._productList = data
        this.collectionSize =  this._productList.length;
        this.refreshProducts();
      }
    )
  }

  page = 1;
  pageSize = 6;
  collectionSize !: number;
  products !: IProduct[];


  refreshProducts() {
    this.products = this._productList.slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
  }
}
