import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { VoyageDataService } from 'src/app/components/pages/tableau-de-bord/services/voyage-data.service';
import { Router } from '@angular/router';
import { VoyageService } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';
import { Voyage } from 'src/app/components/model/Voyage.model';

@Component({
  selector: 'app-etape1-publier-voyage',
  templateUrl: './etape1-publier-voyage.component.html',
  styleUrls: ['./etape1-publier-voyage.component.css']
})
export class Etape1PublierVoyageComponent implements OnInit {
  formData: {
    dateDepart: Date;
    titreVoyage: string;
    description: string;
    prix: number | null;
    duree: number | null;
    ageMin: number | null;
    ageMax: number | null;
    circuit: 'prive' | 'groupe';
    tailleGroupe: number | null;
    guide: 'oui' | 'non';
    langueGuide: string;
    idTypeVoyage: number; // Utilisez l'ID du type de voyage
  } = {
    titreVoyage: '',
    description: '',
    prix: null,
    duree: null,
    ageMin: null,
    ageMax: null,
    circuit: 'prive',
    tailleGroupe: null,
    guide: 'non',
    langueGuide: '',
    idTypeVoyage: 0, // Initialisez avec une valeur par défaut
    dateDepart: new Date(),
  };

  minAge: number = 0;
  maxAge: number = 100;

  listeLangues = ['Français', 'Anglais', 'Espagnol', 'Arabe', 'Chinois', 'Japonais', 'Autre...'];
  typesVoyage: any[] = [];

  constructor(
    private voyageDataService: VoyageDataService,
    private router: Router,
    private voyageService: VoyageService
  ) {}

  ngOnInit() {
    const storedData = this.voyageDataService.getVoyageData();
    this.formData = {
      ...this.formData,
      titreVoyage: storedData.titreVoyage|| '',
      description: storedData.description || '',
      prix: storedData.prix ?? null,
      duree: storedData.duree ?? null,
      ageMin: storedData.ageMin ?? null,
      ageMax: storedData.ageMax ?? null,
      circuit: storedData.circuit || 'prive',
      tailleGroupe: storedData.tailleGroupe ?? null,
      guide: storedData.guide || 'non',
      langueGuide: storedData.langueGuide || '',
      idTypeVoyage: storedData.idTypeVoyage ?? 0, // Utilisez l'ID du type de voyage
      dateDepart: storedData.vol?.dateDepart || new Date(),
    };

    this.voyageService.getTypesVoyage().subscribe(
      (data: any[]) => {
        this.typesVoyage = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des types de voyage :', error);
      }
    );
  }

  updateMinAge(event: Event): void {
    const value = +(event.target as HTMLInputElement).value;
    if (value > this.formData.ageMax!) {
      this.formData.ageMin = this.formData.ageMax;
    } else {
      this.formData.ageMin = value;
    }
  }

  updateMaxAge(event: Event): void {
    const value = +(event.target as HTMLInputElement).value;
    if (value < this.formData.ageMin!) {
      this.formData.ageMax = this.formData.ageMin;
    } else {
      this.formData.ageMax = value;
    }
  }

  onCircuitChange() {
    if (this.formData.circuit === 'prive') {
      this.formData.tailleGroupe = null;
    }
  }

  onGuideChange() {
    if (this.formData.guide === 'non') {
      this.formData.langueGuide = '';
    }
  }

  onSubmit() {
    console.log('✅ onSubmit() a été déclenché !');

    const ageMin = this.formData.ageMin ?? 0;
    const ageMax = this.formData.ageMax ?? 0;

    const cleanedData: Voyage = {
      idVoyage: 0,
      titreVoyage: this.formData.titreVoyage,
      description: this.formData.description,
      prix: this.formData.prix ?? 0,
      duree: this.formData.duree ?? 0,
      circuit: this.formData.circuit,
      tailleGroupe: this.formData.tailleGroupe ?? 0,
      guide: this.formData.guide,
      langueGuide: this.formData.langueGuide,
      idTypeVoyage: this.formData.idTypeVoyage, // Utilisez l'ID du type de voyage
      ageMin: ageMin,
      ageMax: ageMax,
      vol: {
        dateDepart: this.formData.dateDepart,
        dateArrivee: new Date(),
        numeroVol: '',
        nomCompagnieAerienne: '',
        paysDepart: '',
        paysArrivee: '',
        classeVolId: 0, // Initialisé à 0 par défaut
        escale: 'direct',
        fraisClassesVol: {},
        escales_aller: [],
      },
    };

    this.voyageDataService.setVoyageData(cleanedData);
    console.log('📌 Données du voyage sauvegardées :', this.voyageDataService.getVoyageData());

    this.router.navigate(['/tableau-de-bord-agence/etape2-publier-voyage']);
  }
}
