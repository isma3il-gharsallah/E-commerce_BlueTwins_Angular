import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng5SliderModule } from 'ng5-slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CoverComponent } from './cover/cover.component';
 import { AjouterComponent } from './Admin/ajouter/ajouter.component';
import { ModifierComponent } from './Admin/modifier/modifier.component';
import { ListerComponent } from './Admin/lister/lister.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AjoutercategorieComponent } from './Admin/ajoutercategorie/ajoutercategorie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { AjoutertailleComponent } from './Admin/ajoutertaille/ajoutertaille.component';
import { AjoutertailleprodComponent } from './Admin/ajoutertailleprod/ajoutertailleprod.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { ListercategorieComponent } from './Admin/listercategorie/listercategorie.component';
import { ModifiercategorieComponent } from './Admin/modifiercategorie/modifiercategorie.component';
import { ListertailleComponent } from './Admin/listertaille/listertaille.component';
import { ModifiertailleComponent } from './Admin/modifiertaille/modifiertaille.component';
import { ListergenderComponent } from './Admin/listergender/listergender.component';
import { ModifiergenderComponent } from './Admin/modifiergender/modifiergender.component';
import { AjoutergenderComponent } from './Admin/ajoutergender/ajoutergender.component';
import { PanierComponent } from './panier/panier.component';
import { AjouterboutiqueComponent } from './Admin/ajouterboutique/ajouterboutique.component';
import { ListerboutiqueComponent } from './Admin/listerboutique/listerboutique.component';
import { ModifierboutiqueComponent } from './Admin/modifierboutique/modifierboutique.component';
import { AjouterprivilegeComponent } from './Admin/ajouterprivilege/ajouterprivilege.component';
import { ModifierprivilegeComponent } from './Admin/modifierprivilege/modifierprivilege.component';
import { ListerprivilegeComponent } from './Admin/listerprivilege/listerprivilege.component';
import { ListermodelivraisonComponent } from './Admin/listermodelivraison/listermodelivraison.component';
import { ModifiermodelivraisonComponent } from './Admin/modifiermodelivraison/modifiermodelivraison.component';
import { AjoutermodelivraisonComponent } from './Admin/ajoutermodelivraison/ajoutermodelivraison.component';
import { AjouteretatcommandeComponent } from './Admin/ajouteretatcommande/ajouteretatcommande.component';
import { ListeretatcommandeComponent } from './Admin/listeretatcommande/listeretatcommande.component';
import { ModifieretatcommandeComponent } from './Admin/modifieretatcommande/modifieretatcommande.component';
import { ListercompteComponent } from './Admin/listercompte/listercompte.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { AjouterstateComponent } from './Admin/ajouterstate/ajouterstate.component';
import { AjoutercityComponent } from './Admin/ajoutercity/ajoutercity.component';
import { registerLocaleData, DatePipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ProfilComponent } from './profil/profil.component';
import { CommandepassedComponent } from './commandepassed/commandepassed.component';
import { DetailcommandeComponent } from './detailcommande/detailcommande.component';
import { ModifpasswordComponent } from './modifpassword/modifpassword.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AjouterstaffComponent } from './admin/ajouterstaff/ajouterstaff.component';

registerLocaleData(localeFr, 'fr-FR');
 

import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ListernewsletterComponent } from './admin/listernewsletter/listernewsletter.component';
import { ListerstaffComponent } from './Admin/listerstaff/listerstaff.component';
import { ModifierstaffComponent } from './Admin/modifierstaff/modifierstaff.component';
import { ListercommandeComponent } from './Admin/listercommande/listercommande.component';
import { FavorieComponent } from './favorie/favorie.component';
import { ModifiercommandeComponent } from './Admin/modifiercommande/modifiercommande.component';
import { AgGridModule } from 'ag-grid-angular';
 
 import { Login2Component } from './Admin/login2/login2.component';
import { LoginComponent } from './Admin/session/login/login.component';
import { RegisterComponent } from './Admin/session/register/register.component';
import { authInterceptorProviders } from './Admin/session/_helpers/auth.interceptor.ts.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DetailComponent,
    CoverComponent,
    AjouterComponent,
    ModifierComponent,
    ListerComponent,
    FooterComponent,
    NavbarComponent,
    AjoutercategorieComponent,
    NavbarAdminComponent,
    AjoutertailleComponent,
    AjoutertailleprodComponent,
    ListercategorieComponent,
    ModifiercategorieComponent,
    ListertailleComponent,
    ModifiertailleComponent,
    ListergenderComponent,
    ModifiergenderComponent,
    AjoutergenderComponent,
    PanierComponent,
    AjouterboutiqueComponent,
    ListerboutiqueComponent,
    ModifierboutiqueComponent,
    AjouterprivilegeComponent,
    ModifierprivilegeComponent,
    ListerprivilegeComponent,
    ListermodelivraisonComponent,
    ModifiermodelivraisonComponent,
    AjoutermodelivraisonComponent,
    AjouteretatcommandeComponent,
    ListeretatcommandeComponent,
    ModifieretatcommandeComponent,
    ListercompteComponent,
    AuthentificationComponent,
    LivraisonComponent,
    AjouterstateComponent,
    AjoutercityComponent,
    ProfilComponent,
    CommandepassedComponent,
    DetailcommandeComponent,
    ModifpasswordComponent,
    CategorieComponent,
    AjouterstaffComponent,
    ListernewsletterComponent,
    ListerstaffComponent,
    ModifierstaffComponent,
    ListercommandeComponent,
    FavorieComponent,
    ModifiercommandeComponent,
     Login2Component,
    LoginComponent,
    RegisterComponent,
    
    
    
  ],
  imports: [    
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    Ng2OrderModule,
    Ng5SliderModule,
    MatButtonModule,
    MatIconModule,  
    AgGridModule.withComponents([]),
    MatTableModule,
    MatPaginatorModule

  
  ],
  entryComponents:[],
  providers: [{provide: LOCALE_ID, useValue: 'fr-fr'},DatePipe, authInterceptorProviders],
  
  bootstrap: [AppComponent],
   

})
export class AppModule { 
  
}
