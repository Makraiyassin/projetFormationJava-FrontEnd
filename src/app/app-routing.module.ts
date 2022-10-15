import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {ListOmnithequesComponent} from "./components/omnitheque-components/list-omnitheques/list-omnitheques.component";
import {RegisterComponent} from "./components/register/register.component";
import {
  ListProductCatalogueComponent
} from "./components/product-components/list-product-catalogue/list-product-catalogue.component";
import {OnePostComponent} from "./components/post-components/one-post/one-post.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {ContactComponent} from "./components/contact/contact.component";
import {PrivacyPolicyComponent} from "./components/privacy-policy/privacy-policy.component";

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"publication/:id",component:OnePostComponent},
  {path:"omnitheques",component:ListOmnithequesComponent},
  {path:"catalogue",component:ListProductCatalogueComponent},
  {path:"search/:word",component:ListProductCatalogueComponent},
  { path: 'omnitheque', loadChildren: () => import("./pages/omnitheque/omnitheque.module").then(m => m.OmnithequeModule)},
  { path: 'profile', loadChildren: () => import("./pages/profile/profile.module").then(m => m.ProfileModule)},
  {path:"register", component: RegisterComponent},
  {path:"verify/:code", component: VerifyEmailComponent},
  {path:"contact", component: ContactComponent},
  {path:"privacyPolicy", component: PrivacyPolicyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
