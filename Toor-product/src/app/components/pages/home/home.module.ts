import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NiceSelectModule } from 'ng-nice-select';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecomHotelsComponent } from './recom-hotels/recom-hotels.component';
import { CategoryComponent } from './category/category.component';
import { RecomFlightsComponent } from './recom-flights/recom-flights.component';
import { RecomCruiseComponent } from './recom-cruise/recom-cruise.component';
import { ServicesComponent } from './services/services.component';
import { RecomCarsComponent } from './recom-cars/recom-cars.component';
import { TeamComponent } from './team/team.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SearchFormComponent,
    AboutUsComponent,
    RecomHotelsComponent,
    CategoryComponent,
    RecomFlightsComponent,
    RecomCruiseComponent,
    ServicesComponent,
    RecomCarsComponent,
    TeamComponent,
    WhyUsComponent,
    TestimonialsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NiceSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
