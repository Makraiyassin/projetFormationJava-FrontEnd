import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Categories} from "../../../models/Categories";

declare let cloudinary: any ;

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  categories: String[] = Categories;
  dynamicScript!: any;

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
  ) {}

  ngOnInit(): void {
    this.categories = Categories
    this.productForm.patchValue({image:"/assets/produit.png"})
  }
  create() {
    this._productService.create(this.productForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.omnithequeId}`]);
    })
  }

  cloudinaryGo(){
    var myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'dsuyae7y8',
        uploadPreset: 'omnitheque-preset'
      },
      (error:any,result:any)=> {
        if (!error && result && result.event === "success") {
          this.productForm.patchValue({image: result.info.url})
        }
      }
    );

    myWidget.open()
  }
}

