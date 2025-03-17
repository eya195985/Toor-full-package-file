import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProgressionService } from 'src/app/components/pages/tableau-de-bord/services/progression.service';
import { Voyage } from 'src/app/components/model/Voyage.model';

@Injectable({
  providedIn: 'root',
})
export class VoyageDataService {
  private voyageData: Voyage = this.getDefaultVoyageData();

  constructor(private http: HttpClient, private progressionService: ProgressionService) {}

  private getDefaultVoyageData(): Voyage {
    return {
      idVoyage: 0,
      titreVoyage: '',
      description: '',
      prix: 0,
      duree: 0,
      ageMin: 0,
      ageMax: 0,
      circuit: 'prive',
      tailleGroupe: undefined,
      guide: 'non',
      langueGuide: '',
      idTypeVoyage: 0,
      vol: {
        numeroVol: '',
        nomCompagnieAerienne: '',
        paysDepart: '',
        paysArrivee: '',
        dateDepart: new Date(),
        dateArrivee: new Date(),
        classeVolId: 0, // Initialisé à 0 par défaut
        escale: 'direct',
        fraisClassesVol: {},
        escales_aller: [],
      },
      fraisHotel: {}, // Initialisation des frais d'hôtel
      fraisTransport: {}, // Initialisation des frais de transport
      fraisNourriture: {}, // Initialisation des frais de nourriture
      itineraires: [
        {
          destination: '',
          activite: '',
          transportIds: [],
          hotelType: 0,
          hotelName: '',
          nourriture: [],
          autre_services: [],
        },
      ],
    };
  }

  // Mettre à jour les données du voyage
  setVoyageData(data: Partial<Voyage>): void {
    this.voyageData = { ...this.voyageData, ...data };
    this.progressionService.setFormulaireData(this.voyageData);
  }

  // Récupérer les données du voyage
  getVoyageData(): Voyage {
    return this.voyageData;
  }

  // Mettre à jour les frais d'hôtel
  setFraisHotel(fraisHotel: { [key: number]: number }): void {
    this.voyageData.fraisHotel = fraisHotel;
    this.progressionService.setFormulaireData(this.voyageData);
  }

  // Récupérer les frais d'hôtel
  getFraisHotel(): { [key: number]: number } {
    return this.voyageData.fraisHotel || {};
  }

  // Mettre à jour les frais de transport
  setFraisTransport(fraisTransport: { [key: number]: number }): void {
    this.voyageData.fraisTransport = fraisTransport;
    this.progressionService.setFormulaireData(this.voyageData);
  }

  // Récupérer les frais de transport
  getFraisTransport(): { [key: number]: number } {
    return this.voyageData.fraisTransport || {};
  }

  // Mettre à jour les frais de nourriture
  setFraisNourriture(fraisNourriture: { [key: number]: number }): void {
    this.voyageData.fraisNourriture = fraisNourriture;
    this.progressionService.setFormulaireData(this.voyageData);
  }

  // Récupérer les frais de nourriture
  getFraisNourriture(): { [key: number]: number } {
    return this.voyageData.fraisNourriture || {};
  }

  // Mettre à jour les données du vol
  setVolData(volData: Partial<Voyage['vol']>): void {
    this.voyageData.vol = {
      ...this.voyageData.vol,
      numeroVol: volData.numeroVol ?? '',
      nomCompagnieAerienne: volData.nomCompagnieAerienne ?? '',
      paysDepart: volData.paysDepart ?? '',
      paysArrivee: volData.paysArrivee ?? '',
      dateDepart: volData.dateDepart ?? new Date(),
      dateArrivee: volData.dateArrivee ?? new Date(),
      classeVolId: volData.classeVolId ?? 0, // Assurez-vous que c'est un number
      escale: volData.escale ?? 'direct',
      fraisClassesVol: volData.fraisClassesVol ?? {},
      escales_aller: volData.escales_aller ?? [],
    };

    this.progressionService.setFormulaireData(this.voyageData);
  }

  // Récupérer les données du vol
  getVolData(): Voyage['vol'] {
    return this.voyageData.vol;
  }

  // Mettre à jour les itinéraires
  setItineraires(itineraires: Voyage['itineraires']): void {
    this.voyageData.itineraires = itineraires;
    this.progressionService.setFormulaireData(this.voyageData);
  }

  // Récupérer les itinéraires
  getItineraires(): Voyage['itineraires'] {
    return this.voyageData.itineraires;
  }

  // Récupérer les régions par pays
  getRegionsByPays(paysId: number): Observable<any[]> {
    const url = `http://localhost:8080/api/voyages/regions/${paysId}`;
    return this.http.get<any[]>(url).pipe(
      map((response: any[]) => {
        return response;
      })
    );
  }

  // Récupérer les types de transport
  getTypeTransports(): Observable<any[]> {
    const url = `http://localhost:8080/api/voyages/types-transports`;
    return this.http.get<any[]>(url).pipe(
      map((response: any[]) => {
        return response;
      })
    );
  }

  // Récupérer les types d'hôtel
  getHotelTypes(): Observable<any[]> {
    const url = `http://localhost:8080/api/voyages/types-hotels`;
    return this.http.get<any[]>(url).pipe(
      map((response: any[]) => {
        return response;
      })
    );
  }

  // Récupérer les types de nourriture
  getNourritureTypes(): Observable<any[]> {
    const url = `http://localhost:8080/api/voyages/types-nourriture`;
    return this.http.get<any[]>(url).pipe(
      map((response: any[]) => {
        return response;
      })
    );
  }

  // Réinitialiser les données du voyage
  clearVoyageData(): void {
    this.voyageData = this.getDefaultVoyageData();
    this.progressionService.setFormulaireData(this.voyageData);
  }
}
