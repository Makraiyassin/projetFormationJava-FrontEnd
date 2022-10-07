import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
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

  categories: String[] = Categories;

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
    @Inject(DOCUMENT) private document: Document,
    private _renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.categories = Categories
    const scriptElement = this.loadJsScript("https://upload-widget.cloudinary.com/global/all.js");
    // const scriptElement2 = this.loadJsScript(""); // PATH FILE JS cloudinary.JS
  }
  create() {
    this._productService.create(this.productForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.omnithequeId}`]);
    })
  }

  loadJsScript( src: string): HTMLScriptElement {
    let script = this._renderer.createElement("script");
    script.type = 'text/javascript';
    script.src = src;
    this._renderer.appendChild(this.document.body, script);
    return script;
  }
}
