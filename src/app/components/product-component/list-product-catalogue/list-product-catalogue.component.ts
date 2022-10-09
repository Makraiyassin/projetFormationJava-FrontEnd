import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../models/IProduct";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Categories} from "../../../models/Categories";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-product-catalogue',
  templateUrl: './list-product-catalogue.component.html',
  styleUrls: ['./list-product-catalogue.component.css']
})
export class ListProductCatalogueComponent implements OnInit {

  private _productList!: IProduct[];
  categories = Categories;

  filters = new FormGroup({
    category:new FormControl("all"),
    available: new FormControl(true),
    unavailable: new FormControl(true),
    sortBy:new FormControl("category"),
  })

  constructor(
    private _productService : ProductService,
    private _route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this._route.snapshot.url[0].path == "catalogue") this._productService.getAll().subscribe(
      data => {
        this._productList = data
        this.collectionSize =  this._productList.length;
        this.refreshProducts();
      }
    )
    else if(this._route.snapshot.url[0].path == "search") {
      this._route.params.subscribe((params) => {
        this._productService.search(params["name"]).subscribe(data => {
          this._productList = data
          this.collectionSize = this._productList.length;
          this.refreshProducts();
        })
      })
    }
  }

  page = 1;
  pageSize = 6;
  collectionSize !: number;
  products !: IProduct[];


  refreshProducts() {
    this.products = this._productList.slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
  }

  borrowsProgress(product : IProduct): number {
    return product.borrowList.filter(b=>!b.returned).length
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


  filter(){
    if(!!this.filters.value.available && !!this.filters.value.unavailable){
      this.products = []
      return
    }else{
      if(this.filters.value.sortBy == "nameAsc") {
        this._productList.sort((a, b) => (a.name > b.name) ? 1 : (a.name == b.name) ? 0 :-1).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      }else if(this.filters.value.sortBy == "nameDesc") {
        this._productList.sort((a, b) => (a.name < b.name) ? 1 :  (a.name == b.name) ? 0 : -1).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      }else if(this.filters.value.sortBy == "category") {
        this._productList.sort((a, b) => (a.category > b.category) ? 1 : (a.category == b.category) ? 0 : -1 ).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      }

      if(this.filters.value.category != "all"){
        this.products = this._productList.filter(p=>p.category==this.filters.value.category).slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }else{
        this.products = this._productList.slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }

      // if(this.filters.value.available == true){
      //   this.products =  this.products.filter(a=> {a.quantity>0 && this.borrowsProgress(a)<a.quantity}).slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      // }
      // else if(!!this.filters.value.unavailable){
      //   this.products =  this.products.filter(a=> {a.quantity == 0 || this.borrowsProgress(a) >= a.quantity}).slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      // }

    }

  }

}
