import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {IProduct} from "../../../models/IProduct";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  constructor(
    private _productService : ProductService,
    private _route : ActivatedRoute,
    private _router: Router
  ) { }

  product !: IProduct;
  urlSegments : string [] = this._router.url.split("/");

  ngOnInit(): void {
    this._productService.getOne(this._route.snapshot.params["id"]).subscribe(data => this.product = data );
  }

  backFromProfile(){
    let urlSegments = this._router.url.split("/");
    this._router.navigate([
      urlSegments[1],
      urlSegments[2]
    ]);
  }

  backFromOmni(omnithequeId:number ){
    let urlSegments = this._router.url.split("/");
    this._router.navigate([
      urlSegments[1],
      omnithequeId,
      urlSegments[3]
    ]);
  }

}
