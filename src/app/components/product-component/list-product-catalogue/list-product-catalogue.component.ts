import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../models/IProduct";
import {ProductService} from "../../../services/product.service";
import {IOmnitheque} from "../../../models/IOmnitheque";

@Component({
  selector: 'app-list-product-catalogue',
  templateUrl: './list-product-catalogue.component.html',
  styleUrls: ['./list-product-catalogue.component.css']
})
export class ListProductCatalogueComponent implements OnInit {

  private _productList!: IProduct[];
  get productList(): IProduct[] {
    return this._productList;
  }


  constructor(private _productService : ProductService,
  ) { }

  ngOnInit(): void {
    this._productService.getAll().subscribe(
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
