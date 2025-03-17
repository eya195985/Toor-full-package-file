import { Component } from '@angular/core';
import { HotelHelperService } from 'src/app/components/helper/hotel/hotel-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends HotelHelperService {
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: 'linear',
    asNavFor: '.detail-slider-nav'
  };
  settingsThumb = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    asNavFor: '.detail-slider-for',
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }
    }]
  };
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
