import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { VoyageDataService } from 'src/app/components/pages/tableau-de-bord/services/voyage-data.service';
import { Router } from '@angular/router';
import { VoyageService } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';
import { ProgressionService } from 'src/app/components/pages/tableau-de-bord/services/progression.service';

@Component({
  selector: 'app-etape3-publier-voyage',
  templateUrl: './etape3-publier-voyage.component.html',
  styleUrls: ['./etape3-publier-voyage.component.css']
})
export class Etape3PublierVoyageComponent implements OnInit {
  form!: FormGroup;
  regions: any[] = [];
  typeTransports: any[] = [];
  hotelTypes: any[] = [];
  nourritures: any[] = [];
  errorMessage: string | null = null;
  isLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private progressionService: ProgressionService,
    private voyageDataService: VoyageDataService,
    private router: Router,
    private voyageService: VoyageService
  ) {}

  ngOnInit(): void {
    const voyageData = this.voyageDataService.getVoyageData();
    const duree = voyageData.duree || 1;

    this.form = this.fb.group({
      jours: this.fb.array([]),
    });

    for (let i = 0; i < duree; i++) {
      this.addDay();
    }

    this.loadDynamicData();
  }

  loadDynamicData(): void {
    const voyageData = this.voyageDataService.getVoyageData();
    const nomPaysArrivee = voyageData.vol?.paysArrivee;

    if (nomPaysArrivee) {
      this.voyageService.getPaysIdByName(nomPaysArrivee).subscribe(
        (paysId: number | null) => {
          if (paysId !== null) {
            this.voyageService.getRegionsByPays(paysId).subscribe(
              (data: any[]) => {
                console.log('Régions récupérées:', data);
                this.regions = data;
              },
              (error: any) => {
                console.error('Erreur lors de la récupération des régions :', error);
                this.errorMessage = "Erreur lors de la récupération des régions. Veuillez réessayer plus tard.";
              }
            );
          } else {
            console.error('Pays non trouvé :', nomPaysArrivee);
            this.errorMessage = "Pays d'arrivée non trouvé. Veuillez vérifier les informations fournies.";
          }
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Erreur lors de la récupération de l\'ID du pays :', error);
          this.errorMessage = "Erreur lors de la récupération de l'ID du pays. Veuillez réessayer plus tard.";
          this.isLoading = false;
        }
      );
    } else {
      console.error('Nom du pays d\'arrivée non défini.');
      this.errorMessage = "Nom du pays d'arrivée non défini. Veuillez vérifier les informations fournies.";
      this.isLoading = false;
    }

    this.voyageService.getTypeTransports().subscribe(
      (data: any[]) => {
        console.log('Types de transport récupérés:', data);
        this.typeTransports = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des types de transport :', error);
        this.errorMessage = "Erreur lors de la récupération des types de transport. Veuillez réessayer plus tard.";
      }
    );

    this.voyageService.getHotelTypes().subscribe(
      (data: any[]) => {
        console.log('Types d\'hôtel récupérés:', data);
        this.hotelTypes = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des types d\'hôtel :', error);
        this.errorMessage = "Erreur lors de la récupération des types d'hôtel. Veuillez réessayer plus tard.";
      }
    );

    this.voyageService.getNourritureTypes().subscribe(
      (data: any[]) => {
        console.log('Types de nourriture récupérés:', data);
        this.nourritures = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des types de nourriture :', error);
        this.errorMessage = "Erreur lors de la récupération des types de nourriture. Veuillez réessayer plus tard.";
      }
    );
  }

  get jours(): FormArray {
    return this.form.get('jours') as FormArray;
  }

  addDay(): void {
    const dayGroup = this.fb.group({
      destination: ['', Validators.required],
      activite: ['', Validators.required],
      transportIds: this.fb.array([]), // Utilisez transportIds pour stocker les IDs des transports choisis
      hotelType: ['', Validators.required],
      hotelName: ['', Validators.required],
      nourriture: [[]],
      services: this.fb.array([]),
    });
    this.jours.push(dayGroup);
  }

  removeDay(index: number): void {
    this.jours.removeAt(index);
  }

  getServices(dayIndex: number): FormArray {
    return this.jours.at(dayIndex).get('services') as FormArray;
  }

  addService(dayIndex: number): void {
    const serviceControl = this.fb.control('', Validators.required);
    this.getServices(dayIndex).push(serviceControl);
  }

  removeService(dayIndex: number, serviceIndex: number): void {
    this.getServices(dayIndex).removeAt(serviceIndex);
  }

  onPrecedent(): void {
    this.progressionService.setProgression(60);
    this.progressionService.setEtapeActuelle(3);
    this.router.navigate(['/tableau-de-bord-agence/etape2-publier-voyage']);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const voyageData = this.voyageDataService.getVoyageData();

    // Mapper les données du formulaire vers l'objet Voyage
    voyageData.itineraires = this.form.value.jours.map((jour: any) => ({
      destination: jour.destination,
      activite: jour.activite,
      transportIds: jour.transportIds, // Utilisez transportIds pour stocker les IDs des transports choisis
      hotelType: jour.hotelType,
      hotelName: jour.hotelName,
      nourriture: jour.nourriture,
      services: jour.services,
    }));

    // Sauvegarder les données mises à jour
    this.voyageDataService.setVoyageData(voyageData);

    // Afficher les données sauvegardées dans la console
    console.log('Données sauvegardées :', voyageData);

    // Mettre à jour la progression et naviguer vers l'étape suivante
    this.progressionService.setProgression(100);
    this.progressionService.setEtapeActuelle(5);
    this.router.navigate(['/tableau-de-bord-agence/etape4-publier-voyage']);
  }

onTransportChange(dayIndex: number, transportId: number, event: any): void {
  const transportIds = this.jours.at(dayIndex).get('transportIds') as FormArray;
  if (event.target.checked) {
    transportIds.push(this.fb.control(transportId));
  } else {
    const index = transportIds.controls.findIndex(x => x.value === transportId);
    transportIds.removeAt(index);
  }
}

}
