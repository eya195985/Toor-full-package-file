import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { VoyageDetailsRoutingModule } from './voyage-details-routing.module';
import { VoyageDetailsComponent } from './voyage-details.component'; // Chemin corrigé
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ContentComponent } from './content/content.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    VoyageDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    VoyageDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgbNavModule,
    RouterModule

  ]
})
export class VoyageDetailsModule { }
