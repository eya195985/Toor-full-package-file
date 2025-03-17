import { Injectable, AfterContentInit, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import authors from '../../data/team.json';
import flight from '../../data/flights/flight.json';
import flightaccomodation from '../../data/flights/accomondation.json';
import flightairlines from '../../data/flights/airlines.json';
import flightamenities from '../../data/flights/amenities.json';
import flightroute from '../../data/flights/flightroute.json';
import flighttype from '../../data/flights/flighttype.json';
import flightstops from '../../data/flights/stops.json';
import flightcategory from '../../data/category.json';
import testimonials from '../../data/testimonials.json'; 
import { Options, LabelType } from "@angular-slider/ngx-slider"; 

@Injectable({
  providedIn: 'root'
})
@Directive({})
export class FlightHelperService implements AfterContentInit, OnInit {

  // pagination
  page: number = 1;
  // Flight
  public flightblock:any[] = flight;
  public flightdetails = flight;
  // Category
  public category:any[] = flightcategory;
  public flightcategory = flightcategory;
  // Amenities
  public amenities:any[] = flightamenities;
  public flightamenities = flightamenities;
  // Accomodation
  public accomodation:any[] = flightaccomodation;
  public flightaccomodation = flightaccomodation;
  // Airlines
  public airlines:any[] = flightairlines;
  public flightairlines = flightairlines;
  // Route
  public routes:any[] = flightroute;
  public flightroute = flightroute;
  // Type
  public type:any[] = flighttype;
  public flighttype = flighttype;
  // Stops
  public stops:any[] = flightstops;
  public flightstops = flightstops;
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
    var elems = flightcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Amenities
  public getAmenities(items: string | any[]) {
    var elems = flightamenities.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Accomodation
  public getAccomodation(items: string | any[]) {
    var elems = flightaccomodation.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Airlines
  public getAirlines(items: string | any[]) {
    var elems = flightairlines.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Route
  public getRoute(items: string | any[]) {
    var elems = flightroute.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Type
  public getType(items: string | any[]) {
    var elems = flighttype.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Stops
  public getStops(items: string | any[]) {
    var elems = flightstops.filter((item: { id: string; }) => {
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
  // Related flight
  public getFlightByCategory(items: string | any[]):any[] {
    var elems = flight.filter((flight: { id: string; category: any[]; }) => { return parseInt(flight.id) !== parseInt(this.router.snapshot.params.id) && flight.category.some(r => items.includes(r)) });
    return elems;
  }
  // Flight Details
  public setFlight(id: any) {
    this.flightdetails = flight.filter((item: { id: any; }) => { return item.id == id });
  }
  // Recent flight
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }
  public setDemoDate() {
    var today = new Date();
    this.flightblock.slice(0, 5).map((flight: { timestamp: number; flightdate: string; }) => (
      flight.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the flight.json object
      flight.flightdate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth()).slice(0, 3)}, ${today.getFullYear()}`
    ));
  }
  public getRecentFlight():any[] {
    var elems = flight.filter((flight: { timestamp: number | any; flightdate: string | number | Date; }) => {
      return flight.timestamp < new Date(flight.flightdate);
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
      this.route.navigate(['/flight', this.minPrice, this.maxPrice]);
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
  public getFlightsByPrice(minPrice: number, maxPrice: number) {
    return this.flightblock = flight.filter((item: { price: (number) }) => {
      return item.price > minPrice && item.price <= maxPrice
    });
  }
  // Fetch All filter
  public setFlights() {
    var flightsByPrice = this.getPrice() != undefined ? this.getFlightsByPrice(this.getPrice()[0], this.getPrice()[1]) : '';
    if ((flightsByPrice != undefined && flightsByPrice != []) && flightsByPrice.length > 0) {
      this.flightblock = flightsByPrice;
    }
    else {
      this.flightblock = flight;
    }
  }
  ngAfterContentInit(): void {
    this.setPrice(this.router.snapshot.params.minPrice, this.router.snapshot.params.maxPrice);
    this.setFlights();
    this.setFlight(this.router.snapshot.params.id);
  }
  ngOnInit(): void {
    this.setDemoDate();
  }
}
