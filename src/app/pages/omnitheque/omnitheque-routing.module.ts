import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OmnithequeComponent} from "./omnitheque.component";
import {ListProductComponent} from "../../components/product-component/list-product/list-product.component";
import {UpdateOmnithequeComponent} from "../../components/omnitheque-components/update-omnitheque/update-omnitheque.component";
import {CreateProductComponent} from "../../components/product-component/create-product/create-product.component";
import {UpdateProductComponent} from "../../components/product-component/update-product/update-product.component";

const routes: Routes = [
  { path: ":id", component: OmnithequeComponent, children: [
    { path: "products", component: ListProductComponent },
    { path: "", component: ListProductComponent },
    { path: "update", component: UpdateOmnithequeComponent },
    { path: "products/create", component: CreateProductComponent },
    { path: "create", component: CreateProductComponent },
    {path:"products/update/:id", component: UpdateProductComponent},
    {path:"update/:id", component: UpdateProductComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmnithequeRoutingModule { }
