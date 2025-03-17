import { Component } from '@angular/core';
import { HotelHelperService } from 'src/app/components/helper/hotel/hotel-helper.service';

@Component({
  selector: 'app-recom-hotels',
  templateUrl: './recom-hotels.component.html',
  styleUrls: ['./recom-hotels.component.css']
})
export class RecomHotelsComponent extends HotelHelperService {
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
