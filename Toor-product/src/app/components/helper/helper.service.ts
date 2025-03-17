import { Injectable, HostListener, AfterViewInit, OnInit } from '@angular/core';
import data from "../data/navigation.json";
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements AfterViewInit, OnInit {
  public navigation = data;
  windowScrolled : boolean | undefined;
  constructor() { }
  // Sticky Nav
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.windowScrolled = window.scrollY > 100;
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
  // navigation
  navMethod: boolean = false;
  toggleNav() {
    this.navMethod = !this.navMethod;
  }
  //Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }) {
    item.open = !item.open;
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe'
    });
    ($('.popup') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });
  }
}
