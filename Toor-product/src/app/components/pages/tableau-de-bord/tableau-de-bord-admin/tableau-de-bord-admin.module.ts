import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TableauDeBordAdminRoutingModule } from './tableau-de-bord-admin-routing.module';
import { TableauDeBordAdminComponent } from './tableau-de-bord-admin.component';
import { GestionAcceesConcessionnairesComponent } from './gestion-accees-concessionnaires/gestion-accees-concessionnaires.component';
import { GestionAnnoncesConcessionnairesComponent } from './gestion-annonces-concessionnaires/gestion-annonces-concessionnaires.component';
import { ConcessionnaireDetailsComponent } from './concessionnaire-details/concessionnaire-details.component';
import { ConcessionnaireListComponent } from './concessionnaire-list/concessionnaire-list.component';
import { ClientListComponent } from './client-list/client-list.component';




@NgModule({
  declarations: [
    TableauDeBordAdminComponent,
    GestionAcceesConcessionnairesComponent,
    GestionAnnoncesConcessionnairesComponent,
    ConcessionnaireDetailsComponent,
    ConcessionnaireListComponent,
    ClientListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    SlickCarouselModule,
    TableauDeBordAdminRoutingModule
  ]
})
export class TableauDeBordAdminModule { }
