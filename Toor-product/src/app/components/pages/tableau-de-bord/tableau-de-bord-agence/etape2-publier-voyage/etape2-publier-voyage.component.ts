import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressionService } from 'src/app/components/pages/tableau-de-bord/services/progression.service';
import { VoyageService, Pays, ClasseVol } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';
import { VoyageDataService } from 'src/app/components/pages/tableau-de-bord/services/voyage-data.service';

@Component({
  selector: 'app-etape2-publier-voyage',
  templateUrl: './etape2-publier-voyage.component.html',
  styleUrls: ['./etape2-publier-voyage.component.css'],
})
export class Etape2PublierVoyageComponent implements OnInit {
  form!: FormGroup;
  paysList: Pays[] = [];
  classesVolList: ClasseVol[] = [];
  escales: number[] = [];

  constructor(
    private fb: FormBuilder,
    private progressionService: ProgressionService,
    private voyageDataService: VoyageDataService,
    private router: Router,
    private voyageService: VoyageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

this.voyageService.getPays().subscribe(
  (data: Pays[]) => {
    this.paysList = data;
    console.log('Pays récupérés:', this.paysList);
  },
  (error: any) => {
    console.error('Erreur lors de la récupération des pays :', error);
  }
);


    this.voyageService.getClassesVol().subscribe(
      (data: ClasseVol[]) => {
        this.classesVolList = data;
        console.log('Classes de vol récupérées:', this.classesVolList);
        this.updateFormWithClasses();
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des classes de vol :', error);
      }
    );
  }

  initializeForm(): void {
    const storedData = this.voyageDataService.getVoyageData();
    const storedVol = storedData.vol || {};

    const formGroup: { [key: string]: any } = {
      numeroVol: [storedVol.numeroVol || '', Validators.required],
      nomCompagnieAerienne: [storedVol.nomCompagnieAerienne || ''],
      paysDepart: [storedVol.paysDepart || '', Validators.required],
      paysArrivee: [storedVol.paysArrivee || '', Validators.required],
      dateDepart: [
        storedVol.dateDepart ? new Date(storedVol.dateDepart).toISOString().slice(0, 16) : '',
        Validators.required,
      ],
      dateArrivee: [
        storedVol.dateArrivee ? new Date(storedVol.dateArrivee).toISOString().slice(0, 16) : '',
        Validators.required,
      ],
      classeVol: [storedVol.classeVolId || 0, Validators.required], // Utilisez classeVol pour le formulaire
      escale: [storedVol.escale || 'direct', Validators.required],
      escales_aller: this.fb.array([]),
    };

    this.form = this.fb.group(formGroup);
  }

  updateFormWithClasses(): void {
    this.classesVolList.forEach((classe) => {
      this.form.addControl(`frais_${classe.idClasseVoyage}`, this.fb.control(0, Validators.required));
    });

    const storedVol = this.voyageDataService.getVoyageData().vol || {};
    if (storedVol.escales_aller && storedVol.escales_aller.length > 0) {
      storedVol.escales_aller.forEach((idPays: number) => {
        this.ajouterEscale(idPays);
      });
    }
  }

  ajouterEscale(idPays: number = 0): void {
    const escalesArray = this.form.get('escales_aller') as FormArray;
    escalesArray.push(this.fb.group({ pays: [idPays, Validators.required] }));
    this.escales.push(idPays);
  }

  supprimerEscale(index: number): void {
    const escalesArray = this.form.get('escales_aller') as FormArray;
    escalesArray.removeAt(index);
    this.escales.splice(index, 1);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log('Le formulaire est invalide');
      return;
    }

    const formData = this.form.value;

    // Convertir classeVol en number
    const classeVolId = Number(formData.classeVol);
    if (isNaN(classeVolId) || classeVolId <= 0) {
      alert('Veuillez sélectionner une classe de vol valide.');
      return;
    }

    const dateDepart = formData.dateDepart ? new Date(formData.dateDepart) : undefined;
    const dateArrivee = formData.dateArrivee ? new Date(formData.dateArrivee) : undefined;

    const sanitizedFormData = {
      ...formData,
      dateDepart,
      dateArrivee,
      escale: formData.escale as 'direct' | 'escale',
      escales_aller: formData.escales_aller.map((escale: { pays: number }) => escale.pays),
      classeVolId, // Utilisez la valeur convertie
    };

    this.voyageDataService.setVolData(sanitizedFormData);
    this.progressionService.setProgression(40);
    this.progressionService.setEtapeActuelle(3);
    this.router.navigate(['/tableau-de-bord-agence/etape3-publier-voyage']);
  }

  onPrecedent(): void {
    this.progressionService.setProgression(20);
    this.progressionService.setEtapeActuelle(1);
    this.router.navigate(['/tableau-de-bord-agence/etape1-publier-voyage']);
  }
}
