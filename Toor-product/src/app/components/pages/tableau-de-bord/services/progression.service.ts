// src/app/services/progression.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressionService {
  // Sujet pour stocker les données du formulaire
  private formulaireDataSubject = new BehaviorSubject<any>({});
  formulaireData$ = this.formulaireDataSubject.asObservable();

  // Sujet pour la progression (en pourcentage)
  private progressionSubject = new BehaviorSubject<number>(0);
  progression$ = this.progressionSubject.asObservable();

  // Sujet pour l'étape actuelle
  private etapeActuelleSubject = new BehaviorSubject<number>(1);
  etapeActuelle$ = this.etapeActuelleSubject.asObservable();

  constructor() {}

  // Met à jour les données du formulaire
  setFormulaireData(data: any) {
    const currentData = this.formulaireDataSubject.value;
    const newData = { ...currentData, ...data };
    console.log('Données sauvegardées :', newData); // Log pour déboguer
    this.formulaireDataSubject.next(newData);
  }

  getFormulaireData() {
    const data = this.formulaireDataSubject.value;
    console.log('Données récupérées :', data); // Log pour déboguer
    return data;
  }
  // Met à jour la progression
  setProgression(pourcentage: number) {
    this.progressionSubject.next(pourcentage);
  }

  // Met à jour l'étape actuelle
  setEtapeActuelle(etape: number) {
    this.etapeActuelleSubject.next(etape);
  }

  // Réinitialise la progression et les données du formulaire
  reinitialiserProgression() {
    this.formulaireDataSubject.next({});
    this.progressionSubject.next(0);
    this.etapeActuelleSubject.next(1);
  }
}
