import {Component, OnInit } from '@angular/core';
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

  constructor(
    private _productService : ProductService,
    private _router : Router,
  ) {}

  categories: string[] = Categories;
  dynamicScript!: any;

  productForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  })


  ngOnInit(): void {
    this.categories = Categories
    this.productForm.patchValue({image:"http://res.cloudinary.com/dsuyae7y8/image/upload/v1665739795/khbagudgo7zusq9rz2rz.png"})
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

  tradCategory(category : string) {
    switch (category){
      case "BOOK":
        return "Livre"
      case "BOARDGAME":
        return "Jeux de société"
      case "VIDEOGAME":
        return "Jeux vidéo"
      case "MOVIE":
        return "Film"
      case "MUSIC":
        return "Musique"
      default:
        return "Livre"
    }
  }

  create() {
    this._productService.create(this.productForm.value).subscribe(data => {
      this._router.navigate([`/omnitheque/${data.omnithequeId}`]);
    })
  }

}

