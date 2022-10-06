import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CarousselComponent} from "./components/caroussel/caroussel.component";
import { AccueilComponent } from './pages/accueil/accueil.component';
import { OmnithequeComponent } from './pages/omnitheque/omnitheque.component';
import {ListOmnithequesComponent} from "./components/omnitheque-components/list-omnitheques/list-omnitheques.component";
import { SideBareOmnithequeComponent } from './components/omnitheque-components/side-bare-omnitheque/side-bare-omnitheque.component';
import { ListProductOmnithequeComponent } from './components/product-component/list-product-omnitheque/list-product-omnitheque.component';
import { UpdateOmnithequeComponent } from './components/omnitheque-components/update-omnitheque/update-omnitheque.component';
import { CreateProductComponent } from './components/product-component/create-product/create-product.component';
import { UpdateProductComponent } from './components/product-component/update-product/update-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SideBareProfileComponent } from './components/profile-components/side-bare-profile/side-bare-profile.component';
import { InfosProfileComponent } from './components/profile-components/infos-profile/infos-profile.component';
import { CreateOmnithequeComponent } from './components/omnitheque-components/create-omnitheque/create-omnitheque.component';
import { ProfileListBorrowComponent } from './components/borrow-components/profile-list-borrow/profile-list-borrow.component';
import { OmnithequeListBorrowComponent } from './components/borrow-components/omnitheque-list-borrow/omnitheque-list-borrow.component';
import { ListProductCatalogueComponent } from './components/product-component/list-product-catalogue/list-product-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    CarousselComponent,
    AccueilComponent,
    OmnithequeComponent,
    ListOmnithequesComponent,
    SideBareOmnithequeComponent,
    ListProductOmnithequeComponent,
    UpdateOmnithequeComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProfileComponent,
    RegisterComponent,
    SideBareProfileComponent,
    InfosProfileComponent,
    CreateOmnithequeComponent,
    ProfileListBorrowComponent,
    OmnithequeListBorrowComponent,
    ListProductCatalogueComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
