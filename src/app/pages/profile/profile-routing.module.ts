import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {InfosProfileComponent} from "../../components/profile-components/infos-profile/infos-profile.component";
import {
  CreateOmnithequeComponent
} from "../../components/omnitheque-components/create-omnitheque/create-omnitheque.component";
import {ProfileListBorrowComponent} from "../../components/borrow-components/profile-list-borrow/profile-list-borrow.component";
import {OneProductComponent} from "../../components/product-components/one-product/one-product.component";

const routes: Routes = [
  { path: "", component: ProfileComponent, children: [
    { path: "", component: InfosProfileComponent },
    { path: "compte", component: InfosProfileComponent },
    { path: "omnitheque/create", component: CreateOmnithequeComponent },
    { path: "borrows", component: ProfileListBorrowComponent },
    { path: "borrows/product/:id", component: OneProductComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
