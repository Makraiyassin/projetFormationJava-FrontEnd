import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OmnithequeComponent} from "../omnitheque/omnitheque.component";
import {ListProductComponent} from "../../components/product-component/list-product/list-product.component";
import {UpdateOmnithequeComponent} from "../../components/omnitheque-components/update-omnitheque/update-omnitheque.component";
import {CreateProductComponent} from "../../components/product-component/create-product/create-product.component";
import {UpdateProductComponent} from "../../components/product-component/update-product/update-product.component";
import {ProfileComponent} from "./profile.component";
import {InfosProfileComponent} from "../../components/profile-components/infos-profile/infos-profile.component";

const routes: Routes = [
  { path: "", component: ProfileComponent, children: [
    { path: "", component: InfosProfileComponent },
    { path: "compte", component: InfosProfileComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
