import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TableauDeBordAgenceRoutingModule } from './tableau-de-bord-agence-routing.module';
import { TableauDeBordAgenceComponent } from './tableau-de-bord-agence.component';
import { Etape1PublierVoyageComponent } from './etape1-publier-voyage/etape1-publier-voyage.component';
import { Etape2PublierVoyageComponent } from './etape2-publier-voyage/etape2-publier-voyage.component';
import { ProgressionBarComponent } from './progression-bar/progression-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Etape3PublierVoyageComponent } from './etape3-publier-voyage/etape3-publier-voyage.component';
import { Etape4PublierVoyageComponent } from './etape4-publier-voyage/etape4-publier-voyage.component';
import { PanierAgenceComponent } from './panier-agence/panier-agence.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditeLogoComponent } from './edite-logo/edite-logo.component';
import { ContentComponent } from './content/content.component';
import { AuthInterceptor } from 'src/app/Token/Authlntercepter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [

    TableauDeBordAgenceComponent,
    Etape1PublierVoyageComponent,
    Etape2PublierVoyageComponent,
    ProgressionBarComponent,
    Etape3PublierVoyageComponent,
    Etape4PublierVoyageComponent,
    PanierAgenceComponent,
    EditProfilComponent,
    ChangePasswordComponent,
    EditeLogoComponent,
    ContentComponent

  ],
  imports: [
    BreadcrumbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TableauDeBordAgenceRoutingModule,
    NiceSelectModule,
    NgbNavModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
})
export class TableauDeBordAgenceModule { }
