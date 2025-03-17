import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

export interface Pays {
  idPaysDestination: number;
  nomPays: string;
}

export interface ClasseVol {
  idClasseVoyage: number;
  nomClasse: string;
  fraisSupplementaire: number;
}

export interface Utilisateur {
  idUtilisateur: number;
  nomComplet: string;
  email: string;
  telephone: string;
  adresse: string;
  statut: {
    idStatut: number;
    statut: string;
  };
}

export interface Concessionnaire {
  idConcessionnaire: number;
  siteWeb: string;
  numeroTax: string;
  licenceCommerciale: string;
  description: string;
  idUtilisateur: number;
  nomGerant: string;
  emailGerant: string;
  telephoneGerant: string;
  paye: string;
  statut: string;
  logoUrl?: string;
  utilisateur?: Utilisateur;
}

export interface TypeTransport {
  idTypeTransport: number;
  nomType: string;
  fraisTransport: number;
}

export interface TypeHotel {
  idTypeHotel: number;
  categorie: string;
  fraisSupplementaire: number;
}

export interface TypeNourriture {
  idTypeNourriture: number;
  nomType: string;
  fraisNourriture: number;
}

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  private apiUrl = 'http://localhost:8080/api';
  private concessionnairesUrl = `${this.apiUrl}/concessionnaires`;

  constructor(private http: HttpClient) {}

  /**
   * Gestion des erreurs HTTP.
   * @param operation - Nom de l'opération en cours.
   * @param result - Valeur de retour optionnelle en cas d'erreur.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return throwError(() => new Error(error.message || 'Une erreur s\'est produite.'));
    };
  }

  // ==================== Méthodes pour les voyages ====================

  getTypesVoyage(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/voyages/types`).pipe(
      catchError(this.handleError<any[]>('getTypesVoyage', []))
    );
  }

getPays(): Observable<Pays[]> {
  return this.http.get<Pays[]>(`${this.apiUrl}/voyages/pays`).pipe(
    map(data => {
      console.log("✅ Pays reçus :", data); // Ajout d'un log
      return data;
    }),
    catchError(this.handleError<Pays[]>('getPays', []))
  );
}


  getClassesVol(): Observable<ClasseVol[]> {
    return this.http.get<ClasseVol[]>(`${this.apiUrl}/voyages/classes-vol`).pipe(
      catchError(this.handleError<ClasseVol[]>('getClassesVol', []))
    );
  }

  getEscales(): Observable<Pays[]> {
    return this.http.get<Pays[]>(`${this.apiUrl}/voyages/escales`).pipe(
      catchError(this.handleError<Pays[]>('getEscales', []))
    );
  }

  getVoyageById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/voyages/${id}`).pipe(
      catchError(this.handleError<any>('getVoyageById'))
    );
  }

  createVoyage(voyageData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/voyages`, voyageData).pipe(
      catchError(this.handleError<any>('createVoyage'))
    );
  }

  updateVoyage(id: number, voyageData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/voyages/${id}`, voyageData).pipe(
      catchError(this.handleError<any>('updateVoyage'))
    );
  }

  deleteVoyage(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/voyages/${id}`).pipe(
      catchError(this.handleError<any>('deleteVoyage'))
    );
  }

  getPaysIdByName(nomPays: string): Observable<number | null> {
    return this.http.get<Pays[]>(`${this.apiUrl}/voyages/pays`).pipe(
      map(pays => {
        const paysTrouve = pays.find(p => p.nomPays === nomPays);
        return paysTrouve ? paysTrouve.idPaysDestination : null;
      }),
      catchError(this.handleError<number | null>('getPaysIdByName', null))
    );
  }

  getRegionsByPays(paysId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/voyages/regions/${paysId}`).pipe(
      catchError(this.handleError<any[]>('getRegionsByPays', []))
    );
  }

  getTypeTransports(): Observable<TypeTransport[]> {
    return this.http.get<TypeTransport[]>(`${this.apiUrl}/voyages/type-transports`).pipe(
      catchError(this.handleError<TypeTransport[]>('getTypeTransports', []))
    );
  }

  getHotelTypes(): Observable<TypeHotel[]> {
    return this.http.get<TypeHotel[]>(`${this.apiUrl}/voyages/hotel-types`).pipe(
      catchError(this.handleError<TypeHotel[]>('getHotelTypes', []))
    );
  }

  getNourritureTypes(): Observable<TypeNourriture[]> {
    return this.http.get<TypeNourriture[]>(`${this.apiUrl}/voyages/nourriture-types`).pipe(
      catchError(this.handleError<TypeNourriture[]>('getNourritureTypes', []))
    );
  }

  // ==================== Méthodes pour les concessionnaires ====================

  getConcessionnaires(): Observable<Concessionnaire[]> {
    return this.http.get<Concessionnaire[]>(`${this.concessionnairesUrl}/en-attente`).pipe(
      catchError(this.handleError<Concessionnaire[]>('getConcessionnaires', []))
    );
  }

  updateConcessionnaireStatus(idConcessionnaire: number, status: string): Observable<any> {
    return this.getConcessionnaireById(idConcessionnaire).pipe(
      switchMap((concessionnaire: Concessionnaire) => {
        if (concessionnaire && concessionnaire.idUtilisateur) {
          return this.http.put<any>(`${this.concessionnairesUrl}/${idConcessionnaire}/status`, { status }).pipe(
            catchError(this.handleError<any>('updateConcessionnaireStatus'))
          );
        } else {
          return throwError(() => new Error('Concessionnaire ou utilisateur associé non trouvé.'));
        }
      }),
      catchError(this.handleError<any>('updateConcessionnaireStatus'))
    );
  }

  // Récupérer un concessionnaire par son ID
  getConcessionnaireById(id: number): Observable<Concessionnaire> {
    return this.http.get<Concessionnaire>(`${this.concessionnairesUrl}/${id}`).pipe(
      catchError(this.handleError<Concessionnaire>('getConcessionnaireById'))
    );
  }

  // Filtrer les concessionnaires par statut utilisateur
  getConcessionnairesByUtilisateurStatut(statut: string): Observable<Concessionnaire[]> {
    return this.http.get<Concessionnaire[]>(`${this.concessionnairesUrl}/filter-by-user-status?statut=${statut}`).pipe(
      catchError(this.handleError<Concessionnaire[]>('getConcessionnairesByUtilisateurStatut', []))
    );
  }

  // Récupérer tous les concessionnaires
  getAllConcessionnaires(): Observable<Concessionnaire[]> {
    return this.http.get<Concessionnaire[]>(`${this.concessionnairesUrl}`).pipe(
      catchError(this.handleError<Concessionnaire[]>('getAllConcessionnaires', []))
    );
  }



  getUtilisateurById(id: number): Observable<Utilisateur> {
    if (!id) {
      console.error('ID utilisateur manquant');
      return throwError(() => new Error('ID utilisateur manquant'));
    }
    return this.http.get<Utilisateur>(`${this.apiUrl}/utilisateurs/${id}`).pipe(
      catchError(this.handleError<Utilisateur>('getUtilisateurById'))
    );
  }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl}/utilisateurs`).pipe(
      catchError(this.handleError<Utilisateur[]>('getAllUtilisateurs', []))
    );
  }

  getAllClients(): Observable<Utilisateur[]> {
      return this.http.get<Utilisateur[]>(`${this.apiUrl}/clients`).pipe(
        catchError(this.handleError<Utilisateur[]>('getAllUtilisateurs', []))
      );
    }

}
