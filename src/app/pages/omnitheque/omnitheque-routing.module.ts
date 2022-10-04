import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OmnithequeComponent} from "./omnitheque.component";
import {ListProductComponent} from "../../components/product-component/list-product/list-product.component";
import {UpdateOmnithequeComponent} from "../../components/omnitheque-components/update-omnitheque/update-omnitheque.component";

const routes: Routes = [
  { path: ":id", component: OmnithequeComponent, children: [
    { path: "products", component: ListProductComponent },
    { path: "", component: ListProductComponent },
    { path: "update", component: UpdateOmnithequeComponent },
    // {path:"product/create", component: ProductCreateComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmnithequeRoutingModule { }
