import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NiceSelectModule } from 'ng-nice-select';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PartnersComponent } from './partners/partners.component';
import { HotelSidebarComponent } from './hotel-sidebar/hotel-sidebar.component';
import { FlightSidebarComponent } from './flight-sidebar/flight-sidebar.component';
import { CruiseSidebarComponent } from './cruise-sidebar/cruise-sidebar.component';
import { CarSidebarComponent } from './car-sidebar/car-sidebar.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PartnersComponent,
    HotelSidebarComponent,
    FlightSidebarComponent,
    CruiseSidebarComponent,
    CarSidebarComponent,
    BlogSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    NgxSliderModule,
    NiceSelectModule,
    SlickCarouselModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PartnersComponent,
    HotelSidebarComponent,
    FlightSidebarComponent,
    CruiseSidebarComponent,
    CarSidebarComponent,
    BlogSidebarComponent
  ]
})
export class SharedModule { }
