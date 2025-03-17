import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';

import { CarsDetailsRoutingModule } from './cars-details-routing.module';
import { CarsDetailsComponent } from './cars-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    CarsDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    CarsDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule
  ]
})
export class CarsDetailsModule { }
