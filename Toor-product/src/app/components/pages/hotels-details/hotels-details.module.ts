import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelsDetailsRoutingModule } from './hotels-details-routing.module';
import { HotelsDetailsComponent } from './hotels-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HotelsDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HotelsDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelsDetailsModule { }
