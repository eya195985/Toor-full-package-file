import { Injectable, AfterContentInit, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import authors from '../../data/team.json';
import cruise from '../../data/cruise/cruise.json';
import cruiseaccomodation from '../../data/cruise/accomodation.json';
import cruiseamenities from '../../data/cruise/amenities.json';
import cruisecabintype from '../../data/cruise/cabintype.json';
import cruiseline from '../../data/cruise/cruiseline.json';
import cruisepreference from '../../data/cruise/preference.json';
import cruisecategory from '../../data/category.json';
import testimonials from '../../data/testimonials.json';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Injectable({
  providedIn: 'root' 
})
@Directive({})
export class CruiseHelperService implements AfterContentInit, OnInit {
  // pagination
  page: number = 1;
  // Cruise
  public cruiseblock: any[] = cruise;
  public cruisedetails = cruise;
  // Category
  public category: any[] = cruisecategory;
  public cruisecategory = cruisecategory;
  // Amenities
  public amenities: any[] = cruiseamenities;
  public cruiseamenities = cruiseamenities;
  // Accomodation
  public accomodation: any[] = cruiseaccomodation;
  public cruiseaccomodation = cruiseaccomodation;
  // Cabin type
  public cabintype: any[] = cruisecabintype;
  public cruisecabintype = cruisecabintype;
  // Cruise Line
  public line: any[] = cruiseline;
  public cruiseline = cruiseline;
  // Preference
  public preference: any[] = cruisepreference;
  public cruisepreference = cruisepreference;
  // Authors
  public author = authors;
  // Price
  public minPrice: number;
  public maxPrice: number;
  // Nights
  public minNight: number;
  public maxNight: number;
  constructor(private router: ActivatedRoute, private route: Router, private sanitizer: DomSanitizer) {
    this.minPrice = 0;
    this.maxPrice = 0;
    this.minNight = 0;
    this.maxNight = 0;
  }
  // Category
  public getCategories(items: string | any[]) {
    var elems = cruisecategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Amenities
  public getAmenities(items: string | any[]) {
    var elems = cruiseamenities.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Accomodation
  public getAccomodation(items: string | any[]) {
    var elems = cruiseaccomodation.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Cabin type
  public getCabintype(items: string | any[]) {
    var elems = cruisecabintype.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Cruise Line
  public getCruiselin(items: string | any[]) {
    var elems = cruiseline.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Preference
  public getPreference(items: string | any[]) {
    var elems = cruisepreference.filter((item: { id: string; }) => {
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
  // Related cruise
  public getCruiseByCategory(items: string | any[]):any[] {
    var elems = cruise.filter((cruise: { id: string; category: any[]; }) => { return parseInt(cruise.id) !== parseInt(this.router.snapshot.params.id) && cruise.category.some(r => items.includes(r)) });
    return elems;
  }
  // Cruise Details
  public setCruise(id: any) {
    this.cruisedetails = cruise.filter((item: { id: any; }) => { return item.id == id });
  }
  // sanitize url
  public sanitnizeAudioURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
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
      this.route.navigate(['/cruise', this.minPrice, this.maxPrice]);
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
  public getCruisesByPrice(minPrice: number, maxPrice: number) {
    return this.cruiseblock = cruise.filter((item: { price: (number) }) => {
      return item.price > minPrice && item.price <= maxPrice
    });
  }
  // Night filter
  nightFilter: number[] = [0, 10];
  nightFilterOptions: Options = {
    floor: 0,
    ceil: 10,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + value;
        case LabelType.High:
          return "" + value;
        default:
          return "" + value;
      }
    }
  };
  handleNightChange() {
    this.minNight = this.nightFilter[0];
    this.maxNight = this.nightFilter[1];

    if (this.maxNight != 0 && this.minNight != 0) {
      this.route.navigate(['/cruise', this.minNight, this.maxNight]);
    }
  }
  // Night Filter
  public setNight(minNight: number, maxNight: number) {
    this.minNight = minNight;
    this.maxNight = maxNight;
  }
  public getNight() {
    return [this.minNight, this.maxNight]
  }
  public getCruisesByNight(minNight: number, maxNight: number) {
    return this.cruiseblock = cruise.filter((item: { night: number; }) => {
      return item.night > minNight && item.night <= maxNight
    });
  }
  // Fetch All filter
  public setCruises() {
    var cruisesByPrice = this.getPrice() != undefined ? this.getCruisesByPrice(this.getPrice()[0], this.getPrice()[1]) : '';
    var cruisesByNight = this.getNight() != undefined ? this.getCruisesByNight(this.getNight()[0], this.getNight()[1]) : '';
    if ((cruisesByPrice != undefined && cruisesByPrice != []) && cruisesByPrice.length > 0) {
      this.cruiseblock = cruisesByPrice;
    } else if ((cruisesByNight != undefined && cruisesByNight != []) && cruisesByNight.length > 0) {
      this.cruiseblock = cruisesByNight;
    }
    else {
      this.cruiseblock = cruise;
    }
  }
  ngAfterContentInit(): void {
    this.setPrice(this.router.snapshot.params.minPrice, this.router.snapshot.params.maxPrice);
    this.setNight(this.router.snapshot.params.minNight, this.router.snapshot.params.maxNight);
    this.setCruises();
    this.setCruise(this.router.snapshot.params.id);
  }
  ngOnInit(): void {
  }
}
