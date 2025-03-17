import { Injectable, AfterContentInit, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import car from '../../data/cars/cars.json';
import caramenities from '../../data/cars/amenities.json';
import caragents from '../../data/cars/agents.json';
import carpreference from '../../data/cars/prefrences.json';
import cartype from '../../data/cars/type.json';
import carcategory from '../../data/category.json';
import testimonials from '../../data/testimonials.json';
import author from '../../data/team.json';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Injectable({
  providedIn: 'root'
})
@Directive({})
export class CarHelperService implements AfterContentInit, OnInit {
  // pagination
  page: number = 1;
  // Car
  public carblock: any[] = car;
  public cardetails = car;
  // Category
  public category: any[] = carcategory;
  public carcategory = carcategory;
  // Amenities
  public amenities: any[] = caramenities;
  public caramenities = caramenities;
  // Agents
  public agents: any[] = caragents;
  public caragents = caragents;
  // Car type
  public type: any[] = cartype;
  public cartype = cartype;
  // Preference
  public preference: any[] = carpreference;
  public carpreference = carpreference;
  // Price
  public minPrice: number;
  public maxPrice: number;
  constructor(private router: ActivatedRoute, private route: Router) {
    this.minPrice = 0;
    this.maxPrice = 0;
  }
  // Category
  public getCategories(items: string | any[]) {
    var elems = carcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Amenities
  public getAmenities(items: string | any[]) {
    var elems = caramenities.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Agents
  public getAgents(items: string | any[]) {
    var elems = caragents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Car type
  public getCartype(items: string | any[]) {
    var elems = cartype.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Preference
  public getPreference(items: string | any[]) {
    var elems = carpreference.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
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
  // Related car
  public getCarByCategory(items: string | any[]):any[] {
    var elems = car.filter((car: { id: string; category: any[]; }) => { return parseInt(car.id) !== parseInt(this.router.snapshot.params.id) && car.category.some(r => items.includes(r)) });
    return elems;
  }
  // Car Details
  public setCar(id: any) {
    this.cardetails = car.filter((item: { id: any; }) => { return item.id == id });
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
      this.route.navigate(['/car', this.minPrice, this.maxPrice]);
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
  public getCarsByPrice(minPrice: number, maxPrice: number) {
    return this.carblock = car.filter((item: { price: (number) }) => {
      return item.price > minPrice && item.price <= maxPrice
    });
  }
  // Fetch All filter
  public setCars() {
    var carsByPrice = this.getPrice() != undefined ? this.getCarsByPrice(this.getPrice()[0], this.getPrice()[1]) : '';
    if ((carsByPrice != undefined && carsByPrice != []) && carsByPrice.length > 0) {
      this.carblock = carsByPrice;
    }
    else {
      this.carblock = car;
    }
  }
  ngAfterContentInit(): void {
    this.setPrice(this.router.snapshot.params.minPrice, this.router.snapshot.params.maxPrice);
    this.setCars();
    this.setCar(this.router.snapshot.params.id);
  }
  ngOnInit(): void {
  }
}
