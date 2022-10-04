import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./pages/accueil/accueil.component";

const routes: Routes = [
  {path:"",component:AccueilComponent},
  // {path:"register", component: RegisterComponent},
  // {path:"omnitheque/:id", component: OmnithequeDetailsComponent},
  // {path:"profil", component: ProfileComponent},
  // {path:"profil/omnitheque/create", component: OmnithequeCreateComponent},
  // {path:"profil/omnitheque/update", component: OmnithequeUpdateComponent},
  // {path:"product/create", component: ProductCreateComponent},
  // {path:"product/update/:id", component: ProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
