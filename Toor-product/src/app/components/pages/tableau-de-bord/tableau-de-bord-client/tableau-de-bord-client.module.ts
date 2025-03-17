import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableauDeBordClientRoutingModule } from './tableau-de-bord-client-routing.module';
import { TableauDeBordClientComponent } from './tableau-de-bord-client.component';
import { TableauDeBordHeaderComponent } from './tableau-de-bord-header/tableau-de-bord-header.component';
import { TableauDeBordContentComponent } from './tableau-de-bord-content/tableau-de-bord-content.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { EditeLogoComponent } from './edite-logo/edite-logo.component';




@NgModule({
  declarations: [
    TableauDeBordClientComponent,
    TableauDeBordHeaderComponent,
    TableauDeBordContentComponent,
    EditProfilComponent,
    EditeLogoComponent,



  ],
  imports: [


    FormsModule,
    CommonModule,
    CommonModule,
    TableauDeBordClientRoutingModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    ReactiveFormsModule

  ]
})
export class TableauDeBordClientModule {}


