import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial/testimonial-helper.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent extends TestimonialHelperService {
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay:true,
    speed:1000,
    cssEase: 'linear',
  };
}
