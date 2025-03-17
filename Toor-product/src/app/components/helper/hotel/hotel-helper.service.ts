import { Injectable, AfterContentInit, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import authors from '../../data/team.json';
import hotel from '../../data/hotels/hotel.json';
import hotelamenities from '../../data/hotels/amenities.json';
import hotelaccomodation from '../../data/hotels/accomodation.json';
import hotelcategory from '../../data/category.json';
import testimonials from '../../data/testimonials.json';
import { Options, LabelType } from "@angular-slider/ngx-slider"; 

@Injectable({
  providedIn: 'root'
})
@Directive({})
export class HotelHelperService implements AfterContentInit, OnInit {
  // pagination
  page: number = 1; 
  // Hotel
  public hotelblock: any[] = hotel;
  public hoteldetails = hotel;
  // Category
  public category: any[] = hotelcategory;
  public hotelcategory = hotelcategory;
  // Amenities
  public amenities: any[] = hotelamenities;
  public hotelamenities = hotelamenities;
  // Accomodation
  public accomodation: any[] = hotelaccomodation;
  public hotelaccomodation = hotelaccomodation;
  // Authors
  public author = authors;
  // Price
  public minPrice: number;
  public maxPrice: number;
  constructor(private router: ActivatedRoute, private route: Router) {
    this.minPrice = 0;
    this.maxPrice = 0;
  }
  // Category
  public getCategories(items: string | any[]) {
    var elems = hotelcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Amenities
  public getAmenities(items: string | any[]) {
    var elems = hotelamenities.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Accomodation
  public getAccomodation(items: string | any[]) {
    var elems = hotelaccomodation.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Testimonials
  public getTestimonials(items: string | any[]) {
    var elems = testimonials.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Related hotel
  public getHotelByCategory(items: string | any[]):any[] {
    var elems = hotel.filter((hotel: { id: string; category: any[]; }) => { return parseInt(hotel.id) !== parseInt(this.router.snapshot.params.id) && hotel.category.some(r => items.includes(r)) });
    return elems;
  }
  // Hotel Details
  public setHotel(id: any) {
    this.hoteldetails = hotel.filter((item: { id: any; }) => { return item.id == id });
  }
  // Recent hotel
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }
  public setDemoDate() {
    var today = new Date();
    this.hotelblock.slice(0, 5).map((hotel: { timestamp: number; hoteldate: string; }) => (
      hotel.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the hotel.json object
      hotel.hoteldate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth()).slice(0, 3)}, ${today.getFullYear()}`
    ));
  }
  public getRecentHotel(): any[] {
    var elems = hotel.filter((hotel: { timestamp: number | any; hoteldate: string | number | Date; }) => {
      return hotel.timestamp < new Date(hotel.hoteldate);
    });
    return elems;
  }
  // Price filter
  priceFilter: number[] = [0, 1000];
  priceFilterOptions: Options = {
    floor: 100,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$ " + value;
        case LabelType.High:
          return "$ " + value;
        default:
          return "$ " + value;
      }
    }
  };
  handlePriceChange() {
    this.minPrice = this.priceFilter[0];
    this.maxPrice = this.priceFilter[1];

    if (this.maxPrice != 0 && this.minPrice != 0) {
      this.route.navigate(['/hotel', this.minPrice, this.maxPrice]);
    }
  }
  // Price Filter
  public setPrice(minPrice: number, maxPrice: number) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }
  public getPrice() {
    return [this.minPrice, this.maxPrice]
  }
  public getHotelsByPrice(minPrice: number, maxPrice: number) {
    return this.hotelblock = hotel.filter((item: { price: (number) }) => {
      return item.price > minPrice && item.price <= maxPrice
    });
  }
  // Fetch All filter
  public setHotels() {
    var hotelsByPrice = this.getPrice() != undefined ? this.getHotelsByPrice(this.getPrice()[0], this.getPrice()[1]) : '';
    if ((hotelsByPrice != undefined && hotelsByPrice != []) && hotelsByPrice.length > 0) {
      this.hotelblock = hotelsByPrice;
    }
    else {
      this.hotelblock = hotel;
    }
  }
  ngAfterContentInit(): void {
    this.setPrice(this.router.snapshot.params.minPrice, this.router.snapshot.params.maxPrice);
    this.setHotels();
    this.setHotel(this.router.snapshot.params.id);
  }
  ngOnInit(): void {
    this.setDemoDate();
  }
}
