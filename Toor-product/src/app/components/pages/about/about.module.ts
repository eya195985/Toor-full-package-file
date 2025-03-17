import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CounterComponent } from './counter/counter.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutUsComponent,
    CounterComponent,
    WhyUsComponent,
    TestimonialsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AboutModule { }
