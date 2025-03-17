import { Component } from '@angular/core';
import { CarHelperService } from 'src/app/components/helper/cars/car-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends CarHelperService {
  settingsTesti = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: false,
    dots: false,
    cssEase: 'linear',
  };
}
