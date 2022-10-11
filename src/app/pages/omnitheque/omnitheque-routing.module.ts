import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OmnithequeComponent} from "./omnitheque.component";
import {ListProductOmnithequeComponent} from "../../components/product-components/list-product-omnitheque/list-product-omnitheque.component";
import {UpdateOmnithequeComponent} from "../../components/omnitheque-components/update-omnitheque/update-omnitheque.component";
import {CreateProductComponent} from "../../components/product-components/create-product/create-product.component";
import {UpdateProductComponent} from "../../components/product-components/update-product/update-product.component";
import {
  OmnithequeListBorrowComponent
} from "../../components/borrow-components/omnitheque-list-borrow/omnitheque-list-borrow.component";
import {OneProductComponent} from "../../components/product-components/one-product/one-product.component";
import {ListPostComponent} from "../../components/post-components/list-post/list-post.component";

const routes: Routes = [
  { path: ":id", component: OmnithequeComponent, children: [
    { path: "", component: ListPostComponent },
    { path: "publications", component: ListPostComponent },
    { path: "products", component: ListProductOmnithequeComponent },
    { path: "update", component: UpdateOmnithequeComponent },
    { path: "products/create", component: CreateProductComponent },
    { path: "create", component: CreateProductComponent },
    {path:"products/update/:id", component: UpdateProductComponent},
    {path:"update/:id", component: UpdateProductComponent},
    {path:"borrows", component: OmnithequeListBorrowComponent},
    { path: "borrows/product/:id", component: OneProductComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmnithequeRoutingModule { }
