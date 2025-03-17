import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressionService } from 'src/app/components/pages/tableau-de-bord/services/progression.service';
import { VoyageDataService } from 'src/app/components/pages/tableau-de-bord/services/voyage-data.service';
import { VoyageService, ClasseVol, TypeHotel, TypeTransport, TypeNourriture } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';
import { TransactionService } from 'src/app/components/pages/tableau-de-bord/services/transaction.service';

@Component({
  selector: 'app-etape4-publier-voyage',
  templateUrl: './etape4-publier-voyage.component.html',
  styleUrls: ['./etape4-publier-voyage.component.css'],
})
export class Etape4PublierVoyageComponent implements OnInit {
  form!: FormGroup;
  classesVolList: ClasseVol[] = [];
  hotelTypes: TypeHotel[] = [];
  typeTransports: TypeTransport[] = [];
  nourritureTypes: TypeNourriture[] = [];

  constructor(
    private fb: FormBuilder,
    private progressionService: ProgressionService,
    private voyageDataService: VoyageDataService,
    private router: Router,
    private voyageService: VoyageService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  initializeForm(): void {
    const storedData = this.voyageDataService.getVoyageData();

    const formGroup: { [key: string]: any } = {};

    this.classesVolList.forEach((classe) => {
      formGroup[`frais_${classe.idClasseVoyage}`] = [
        storedData.vol?.fraisClassesVol?.[classe.idClasseVoyage] || 0,
        Validators.required,
      ];
    });

    this.hotelTypes.forEach((hotel) => {
      formGroup[`fraisHotel_${hotel.idTypeHotel}`] = [
        storedData.fraisHotel?.[hotel.idTypeHotel] || 0,
        Validators.required,
      ];
    });

    this.typeTransports.forEach((transport) => {
      formGroup[`fraisTransport_${transport.idTypeTransport}`] = [
        storedData.fraisTransport?.[transport.idTypeTransport] || 0,
        Validators.required,
      ];
    });

    this.nourritureTypes.forEach((nourriture) => {
      formGroup[`fraisNourriture_${nourriture.idTypeNourriture}`] = [
        storedData.fraisNourriture?.[nourriture.idTypeNourriture] || 0,
        Validators.required,
      ];
    });

    this.form = this.fb.group(formGroup);
  }

  loadData(): void {
    this.voyageService.getClassesVol().subscribe(
      (data: ClasseVol[]) => {
        this.classesVolList = data;
        this.voyageService.getHotelTypes().subscribe(
          (hotelData: TypeHotel[]) => {
            this.hotelTypes = hotelData;
            this.voyageService.getTypeTransports().subscribe(
              (transportData: TypeTransport[]) => {
                this.typeTransports = transportData;
                this.voyageService.getNourritureTypes().subscribe(
                  (nourritureData: TypeNourriture[]) => {
                    this.nourritureTypes = nourritureData;
                    this.initializeForm();
                  },
                  (error) => {
                    console.error('Erreur lors de la récupération des types de nourriture :', error);
                  }
                );
              },
              (error) => {
                console.error('Erreur lors de la récupération des types de transport :', error);
              }
            );
          },
          (error) => {
            console.error('Erreur lors de la récupération des types d\'hôtel :', error);
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la récupération des classes de vol :', error);
      }
    );
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log('Le formulaire est invalide');
      return;
    }

    const voyageData = this.voyageDataService.getVoyageData();

    const fraisClassesVol = this.classesVolList.reduce((acc, classe) => {
      acc[classe.idClasseVoyage] = this.form.get(`frais_${classe.idClasseVoyage}`)?.value || 0;
      return acc;
    }, {} as { [key: number]: number });

    voyageData.vol.fraisClassesVol = fraisClassesVol;

    const fraisHotel: { [key: number]: number } = {};
    const fraisTransport: { [key: number]: number } = {};
    const fraisNourriture: { [key: number]: number } = {};

    this.hotelTypes.forEach((hotel) => {
      fraisHotel[hotel.idTypeHotel] = this.form.get(`fraisHotel_${hotel.idTypeHotel}`)?.value || 0;
    });

    this.typeTransports.forEach((transport) => {
      fraisTransport[transport.idTypeTransport] = this.form.get(`fraisTransport_${transport.idTypeTransport}`)?.value || 0;
    });

    this.nourritureTypes.forEach((nourriture) => {
      fraisNourriture[nourriture.idTypeNourriture] = this.form.get(`fraisNourriture_${nourriture.idTypeNourriture}`)?.value || 0;
    });

    voyageData.fraisHotel = fraisHotel;
    voyageData.fraisTransport = fraisTransport;
    voyageData.fraisNourriture = fraisNourriture;

    voyageData.idTypeVoyage = Number(voyageData.idTypeVoyage);
    voyageData.ageMin = Number(voyageData.ageMin);
    voyageData.ageMax = Number(voyageData.ageMax);

    this.voyageDataService.setVoyageData(voyageData);

    console.log('Données envoyées au backend :', voyageData);

    this.transactionService.createVoyage(voyageData).subscribe(
      (response) => {
        console.log('Voyage créé avec succès :', response);
        this.progressionService.setProgression(100);
        this.progressionService.setEtapeActuelle(6);
        this.router.navigate(['/tableau-de-bord-agence']);
      },
      (error) => {
        console.error('Erreur lors de la création du voyage :', error);
        alert('Une erreur est survenue lors de la création du voyage. Veuillez réessayer.');
      }
    );
  }

  onPrecedent(): void {
    this.progressionService.setProgression(80);
    this.progressionService.setEtapeActuelle(4);
    this.router.navigate(['/tableau-de-bord-agence/etape3-publier-voyage']);
  }
}
