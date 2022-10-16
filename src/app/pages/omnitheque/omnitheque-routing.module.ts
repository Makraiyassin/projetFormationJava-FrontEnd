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
import {CreatePostComponent} from "../../components/post-components/create-post/create-post.component";
import {UpdatePostComponent} from "../../components/post-components/update-post/update-post.component";
import {OnePostComponent} from "../../components/post-components/one-post/one-post.component";
import {AboutComponent} from "../../components/about/about.component";
import {InfoUserComponent} from "../../components/info-user/info-user.component";

const routes: Routes = [
  { path: ":id", component: OmnithequeComponent, children: [
    { path: "update", component: UpdateOmnithequeComponent },
    { path: "", component: ListPostComponent },
    { path: "publications", component: ListPostComponent },
      { path:"publications/update/:id", component: UpdatePostComponent},
      { path: "publications/createPost", component: CreatePostComponent },
      { path:"publications/publication/:id",component:OnePostComponent},
    { path: "products", component: ListProductOmnithequeComponent },
      { path: "products/createProduct", component: CreateProductComponent },
      {path:"products/update/:id", component: UpdateProductComponent},
      { path: "createProduct", component: CreateProductComponent },
      {path:"update/:id", component: UpdateProductComponent},
    {path:"borrows", component: OmnithequeListBorrowComponent},
      { path: "borrows/product/:id", component: OneProductComponent },
      {path:"borrows/utilisateur/:id", component: InfoUserComponent},
    { path: "about/:id", component: AboutComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmnithequeRoutingModule { }
