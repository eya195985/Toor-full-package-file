import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauDeBordAgenceComponent } from './tableau-de-bord-agence.component';
import { Etape1PublierVoyageComponent } from './etape1-publier-voyage/etape1-publier-voyage.component';
import { Etape2PublierVoyageComponent } from './etape2-publier-voyage/etape2-publier-voyage.component';
import { ProgressionBarComponent } from './progression-bar/progression-bar.component';
import { Etape3PublierVoyageComponent } from './etape3-publier-voyage/etape3-publier-voyage.component';
import { Etape4PublierVoyageComponent } from './etape4-publier-voyage/etape4-publier-voyage.component';
import { PanierAgenceComponent } from './panier-agence/panier-agence.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {
    path: '',
    component: TableauDeBordAgenceComponent,
    children: [
      { path: 'etape1-publier-voyage', component: Etape1PublierVoyageComponent },
      { path: 'etape2-publier-voyage', component: Etape2PublierVoyageComponent },
      { path: 'etape3-publier-voyage', component: Etape3PublierVoyageComponent },
      { path: 'etape4-publier-voyage', component: Etape4PublierVoyageComponent },
      { path: 'progression-bar', component: ProgressionBarComponent },
      { path: 'panier', component: PanierAgenceComponent },
      { path: 'EditProfil', component: ContentComponent },
      { path: 'ChangePassword', component: ChangePasswordComponent },
      { path: '', redirectTo: 'panier', pathMatch: 'full' }, // Redirection par défaut
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableauDeBordAgenceRoutingModule { }
