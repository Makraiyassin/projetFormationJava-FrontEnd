import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
    quantity: new FormControl(),
  })
  constructor(
    private _route: ActivatedRoute,
    private _productservice: ProductService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._productservice.getOne(this._route.snapshot.params["id"]).subscribe(data => {
      this.productForm.patchValue({
        id: data.id,
        name: data.name,
        category: data.category,
        description: data.description,
        quantity: data.quantity,
      })
    })
  }

  edit(){
    console.log(this.productForm.value)
    this._productservice.update(this.productForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.omnithequeId}`]);
    })
  }
}
