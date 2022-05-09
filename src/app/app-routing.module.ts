import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { BodyComponent } from './body/body.component';
import { AjouterComponent } from './Admin/ajouter/ajouter.component';
import { ModifierComponent } from './Admin/modifier/modifier.component';
import { HttpClientModule } from '@angular/common/http';
import { ListerComponent } from './Admin/lister/lister.component';
import { AjoutercategorieComponent } from './Admin/ajoutercategorie/ajoutercategorie.component';
import { AjoutertailleComponent } from './Admin/ajoutertaille/ajoutertaille.component';
import { AjoutertailleprodComponent } from './Admin/ajoutertailleprod/ajoutertailleprod.component';
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
import { ListerprivilegeComponent } from './Admin/listerprivilege/listerprivilege.component';
import { ModifierprivilegeComponent } from './Admin/modifierprivilege/modifierprivilege.component';
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
import { ProfilComponent } from './profil/profil.component';

import { CommandepassedComponent } from './commandepassed/commandepassed.component';
import { DetailcommandeComponent } from './detailcommande/detailcommande.component';
import { ModifpasswordComponent } from './modifpassword/modifpassword.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AjouterstaffComponent } from './admin/ajouterstaff/ajouterstaff.component';
import { ListernewsletterComponent } from './admin/listernewsletter/listernewsletter.component';
import { ListerstaffComponent } from './Admin/listerstaff/listerstaff.component';
import { ModifierstaffComponent } from './Admin/modifierstaff/modifierstaff.component';
import { FavorieComponent } from './favorie/favorie.component';
import { ListercommandeComponent } from './Admin/listercommande/listercommande.component';
import { ModifiercommandeComponent } from './Admin/modifiercommande/modifiercommande.component';
 import { Login2Component } from './Admin/login2/login2.component';

 import { LoginComponent } from './Admin/session/login/login.component';
import { RegisterComponent } from './Admin/session/register/register.component';
import { authInterceptorProviders } from './Admin/session/_helpers/auth.interceptor.ts.service';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'espace_admin/article/ajouter', component: AjouterComponent },
  { path: 'espace_admin/categorie/ajouter', component: AjoutercategorieComponent },
  { path: 'espace_admin/taille/ajouter', component: AjoutertailleComponent },
  { path: 'espace_admin/tailleprod/ajouter', component: AjoutertailleprodComponent },
  { path: 'espace_admin/boutique/ajouter', component: AjouterboutiqueComponent },
  { path: 'espace_admin/boutique/lister', component: ListerboutiqueComponent },
  { path: 'espace_admin/privilege/lister', component: ListerprivilegeComponent },
  { path: 'espace_admin/modelivraison/ajouter', component: AjoutermodelivraisonComponent },
  { path: 'espace_admin/modelivraison/modifier/:id', component:ModifiermodelivraisonComponent},
  { path: 'espace_admin/modelivraison/lister', component: ListermodelivraisonComponent },
  { path: 'espace_admin/etatcommande/ajouter', component: AjouteretatcommandeComponent },
  { path: 'espace_admin/etatcommande/lister', component: ListeretatcommandeComponent },
  { path: 'espace_admin/etatcommande/modifier/:id', component:ModifieretatcommandeComponent},
  { path: 'espace_admin/compte/lister', component: ListercompteComponent },
  { path: 'espace_admin/newsletter/lister', component: ListernewsletterComponent },
  { path: 'espace_admin/staff/lister', component: ListerstaffComponent },

  { path: 'espace_admin/categorie/lister', component: ListercategorieComponent },
  { path: 'espace_admin/gender/lister', component: ListergenderComponent },
  { path: 'espace_admin/gender/modifier/:id', component:ModifiergenderComponent},
  { path: 'espace_admin/gender/ajouter', component: AjoutergenderComponent },
  { path: 'espace_admin/boutique/modifier/:id', component:ModifierboutiqueComponent},
  { path: 'espace_admin/privilege/ajouter', component: AjouterprivilegeComponent },
  { path: 'espace_admin/privilege/modifier/:id', component:ModifierprivilegeComponent},
  { path: 'espace_admin/state/ajouter', component: AjouterstateComponent },
  { path: 'espace_admin/city/ajouter', component: AjoutercityComponent },
  { path: 'espace_admin/commande/lister', component: ListercommandeComponent },

  { path: 'espace_admin/categorie/modifier/:id', component:ModifiercategorieComponent},
  { path: 'espace_admin/taille/lister', component: ListertailleComponent },
  { path: 'espace_admin/taille/modifier/:id', component: ModifiertailleComponent },
  { path: 'espace_admin/staff/modifier/:id', component: ModifierstaffComponent },
  { path: 'espace_admin/commande/modifier/:id', component: ModifiercommandeComponent },

  { path: 'espace_admin/article/modifier/:id', component: ModifierComponent },
  { path: 'espace_admin/article/lister', component: ListerComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'voscommande', component: CommandepassedComponent },

  { path: 'compte/register/:connexion', component:   AuthentificationComponent},
  { path: 'profil', component:   ProfilComponent},
  { path: 'modifiermdp', component:   ModifpasswordComponent},
  { path: 'categorie/:mode', component:  CategorieComponent},
  { path: 'espace_admin/staff/ajouter', component:   AjouterstaffComponent},

  { path: 'detailcommande/:id', component:   DetailcommandeComponent},
  { path: 'favorie', component:   FavorieComponent},

 /////////////////////////////////
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
  /////////////////////////////////////////
     { path: 'login2', component: Login2Component },

    // otherwise redirect to home
    { path: '**', component: BodyComponent },
    { path: '**', redirectTo: '' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }