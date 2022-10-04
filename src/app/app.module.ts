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
import { ListProductComponent } from './components/product-component/list-product/list-product.component';
import { UpdateOmnithequeComponent } from './components/omnitheque-components/update-omnitheque/update-omnitheque.component';

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
    ListProductComponent,
    UpdateOmnithequeComponent,
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
