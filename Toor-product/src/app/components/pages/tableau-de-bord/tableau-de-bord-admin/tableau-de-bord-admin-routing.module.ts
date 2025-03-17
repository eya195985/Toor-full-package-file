import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauDeBordAdminComponent } from './tableau-de-bord-admin.component';
import { GestionAcceesConcessionnairesComponent } from './gestion-accees-concessionnaires/gestion-accees-concessionnaires.component';
import { GestionAnnoncesConcessionnairesComponent } from './gestion-annonces-concessionnaires/gestion-annonces-concessionnaires.component';
import { ConcessionnaireDetailsComponent } from './concessionnaire-details/concessionnaire-details.component';
import { ConcessionnaireListComponent } from './concessionnaire-list/concessionnaire-list.component';
import { ClientListComponent } from './client-list/client-list.component';


const routes: Routes = [
  {
    path: '',
    component: TableauDeBordAdminComponent,
    children: [
      { path: 'gestion-accees-concessionnaires', component: GestionAcceesConcessionnairesComponent },
      { path: 'gestion-annonces-concessionnaires', component: GestionAnnoncesConcessionnairesComponent },
      { path: 'concessionnaire-list', component: ConcessionnaireListComponent },
      { path: 'client-list', component: ClientListComponent },
      { path: 'concessionnaire-details/:id', component: ConcessionnaireDetailsComponent }, // Ajoutez l'ID ici
      { path: '', redirectTo: 'gestion-accees-concessionnaires', pathMatch: 'full' } // Redirection par défaut
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableauDeBordAdminRoutingModule { }
