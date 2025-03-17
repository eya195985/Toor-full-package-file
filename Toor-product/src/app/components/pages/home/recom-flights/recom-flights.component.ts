import { Component } from '@angular/core';
import { FlightHelperService } from 'src/app/components/helper/flight/flight-helper.service';

@Component({
  selector: 'app-recom-flights',
  templateUrl: './recom-flights.component.html',
  styleUrls: ['./recom-flights.component.css']
})
export class RecomFlightsComponent extends FlightHelperService {
  settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }]
  };
}
