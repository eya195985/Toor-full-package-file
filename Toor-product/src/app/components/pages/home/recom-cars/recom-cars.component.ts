import { Component } from '@angular/core';
import { CarHelperService } from 'src/app/components/helper/cars/car-helper.service';

@Component({
  selector: 'app-recom-cars',
  templateUrl: './recom-cars.component.html',
  styleUrls: ['./recom-cars.component.css']
})
export class RecomCarsComponent extends CarHelperService {
  settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    }, {
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
        slidesToShow: 2
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
