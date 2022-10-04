import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Categories} from "../../../models/Categories";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  categories !: String[];

  productForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  })

  constructor(
    private _productService : ProductService,
    private _router : Router,
  ) { }

  ngOnInit(): void {
    this.categories = Categories
  }
  create() {
    this._productService.create(this.productForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.omnithequeId}`]);
    })
  }
}
