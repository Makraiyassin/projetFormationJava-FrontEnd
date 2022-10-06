import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OmnithequeComponent} from "./omnitheque.component";
import {ListProductOmnithequeComponent} from "../../components/product-component/list-product-omnitheque/list-product-omnitheque.component";
import {UpdateOmnithequeComponent} from "../../components/omnitheque-components/update-omnitheque/update-omnitheque.component";
import {CreateProductComponent} from "../../components/product-component/create-product/create-product.component";
import {UpdateProductComponent} from "../../components/product-component/update-product/update-product.component";
import {
  OmnithequeListBorrowComponent
} from "../../components/borrow-components/omnitheque-list-borrow/omnitheque-list-borrow.component";

const routes: Routes = [
  { path: ":id", component: OmnithequeComponent, children: [
    { path: "products", component: ListProductOmnithequeComponent },
    { path: "", component: ListProductOmnithequeComponent },
    { path: "update", component: UpdateOmnithequeComponent },
    { path: "products/create", component: CreateProductComponent },
    { path: "create", component: CreateProductComponent },
    {path:"products/update/:id", component: UpdateProductComponent},
    {path:"update/:id", component: UpdateProductComponent},
    {path:"borrows", component: OmnithequeListBorrowComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmnithequeRoutingModule { }
