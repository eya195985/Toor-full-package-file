import { Component, OnInit } from '@angular/core';
import data from "../../../data/banner.json";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public bannerpost = data;
  constructor() { }
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }]
  };

  ngOnInit(): void {
  }

}
