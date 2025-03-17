import { Component, OnInit } from '@angular/core';
import data from '../../data/partners.json';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  public partners = data;
  constructor() { }
  settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1, 
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 5
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 4
        }
      }, {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3
        }
      }, {
        breakpoint: 400,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2
        }
      }]
  };

  ngOnInit(): void {
  }

}
