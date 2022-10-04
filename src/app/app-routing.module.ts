import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {OmnithequeComponent} from "./pages/omnitheque/omnitheque.component";
import {ListOmnithequesComponent} from "./components/omnitheque-components/list-omnitheques/list-omnitheques.component";

const routes: Routes = [
  {path:"",component:AccueilComponent},
  { path: 'omnitheque', loadChildren: () => import("./pages/omnitheque/omnitheque.module").then(m => m.OmnithequeModule)},
  {path:"omnitheques",component:ListOmnithequesComponent},
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
