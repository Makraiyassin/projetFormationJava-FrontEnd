import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {InfosProfileComponent} from "../../components/profile-components/infos-profile/infos-profile.component";
import {
  CreateOmnithequeComponent
} from "../../components/omnitheque-components/create-omnitheque/create-omnitheque.component";

const routes: Routes = [
  { path: "", component: ProfileComponent, children: [
    { path: "", component: InfosProfileComponent },
    { path: "compte", component: InfosProfileComponent },
    { path: "omnitheque/create", component: CreateOmnithequeComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
