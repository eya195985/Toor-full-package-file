import { Component } from '@angular/core';
import { HotelHelperService } from 'src/app/components/helper/hotel/hotel-helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageDetailsService, Annonce, Itineraire } from 'src/app/components/pages/voyage-details/services/voyageDetails.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends HotelHelperService {

  idAnnonce: number | null = null;
  annonce: Annonce | null = null;
  itineraires: Itineraire[] = [];
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute, // Renommé pour éviter le conflit
    private voyagedetailsService: VoyageDetailsService,
    private angularRouter: Router // Renommé pour éviter le conflit
  ) {
    super(activatedRoute, angularRouter); // Passer les arguments requis à super()
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.idAnnonce = +id;
        this.loadAnnonce(this.idAnnonce);
      }
    });
  }

  loadAnnonce(idAnnonce: number): void {
    this.isLoading = true;
    this.voyagedetailsService.getAnnonceById(idAnnonce).subscribe(
      (data: Annonce) => {
        this.annonce = data;
        const idVoyage = this.annonce.voyage.idVoyage;
        this.loadItineraires(idVoyage);
        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = false;
        console.error('Erreur lors du chargement de l\'annonce', error);
      }
    );
  }

  loadItineraires(idVoyage: number): void {
    this.voyagedetailsService.getItinerairesByVoyageId(idVoyage).subscribe(
      (data: Itineraire[]) => {
        this.itineraires = data;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des itinéraires', error);
      }
    );
  }

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
