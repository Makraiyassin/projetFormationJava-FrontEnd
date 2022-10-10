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
    if(this._route.snapshot.url[0].path == "catalogue") this._productService.getAll()
      .subscribe(data => {
        this._productList = data
        this.collectionSize =  this._productList.length;
        this.filter();
    })
    else if(this._route.snapshot.url[0].path == "search") {
      this._route.params.subscribe((params) => {
        this._productService.search(params["name"]).subscribe(data => {
          this._productList = data
          this.collectionSize = this._productList.length;
          this.filter();
        })
      })
    }
  }

  page = 1;
  pageSize = 6;
  collectionSize !: number;
  products !: IProduct[];

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
    if(!this.filters.value.available && !this.filters.value.unavailable){
      this.products = []
      return
    }
    else if(this.filters.value.available && !this.filters.value.unavailable){
      if(this.filters.value.category != "all"){
        this.products = this.sortedProductList()
          .filter(a=> a.quantity>0 && this.borrowsProgress(a) < a.quantity)
          .filter(p=>p.category==this.filters.value.category)
          .slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }else{
        this.products = this.sortedProductList()
          .filter(p=> p.quantity>0 && this.borrowsProgress(p)<p.quantity)
          .slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }
    }
    else if(!this.filters.value.available && this.filters.value.unavailable){
      if(this.filters.value.category != "all"){
        this.products = this.sortedProductList()
          .filter(p=> p.quantity>0 &&  this.borrowsProgress(p) >= p.quantity)
          .filter(p=>p.category==this.filters.value.category)
          .slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }else{
        this.products = this.sortedProductList()
          .filter(p=> p.quantity>0 && this.borrowsProgress(p) >= p.quantity)
          .slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }
    }
    else{
      if(this.filters.value.category != "all"){
        this.products = this.sortedProductList()
          .filter(p=> p.quantity>0 && p.category==this.filters.value.category)
          .slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }else{
        this.products = this.sortedProductList()
          .filter(p=> p.quantity>0)
          .slice((this.page-1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
      }
    }
  }

  sortedProductList(){
    if(this.filters.value.sortBy == "nameAsc") {
      return this._productList
        .sort((a, b) => (a.name > b.name) ? 1 : (a.name == b.name) ? 0 :-1)
    }
    else if(this.filters.value.sortBy == "nameDesc") {
      return this._productList
        .sort((a, b) => (a.name < b.name) ? 1 :  (a.name == b.name) ? 0 : -1)
    }
    else if(this.filters.value.sortBy == "category") {
      return this._productList
        .sort((a, b) => (a.category > b.category) ? 1 : (a.category == b.category) ? 0 : -1 )
    }
    else{
      return this._productList
    }
  }

}
