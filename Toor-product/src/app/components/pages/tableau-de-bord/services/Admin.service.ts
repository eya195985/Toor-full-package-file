import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Exportez l'interface ConcessionnaireResponse
export interface ConcessionnaireResponse {
  idConcessionnaire: number;
  idUtilisateur: number;
  nomComplet: string;
  email: string;
  telephone: string;
  adresse: string;
  siteWeb: string;
  numeroTax: string;
  licenceCommerciale: string;
  description: string;
  nomGerant: string;
  emailGerant: string;
  telephoneGerant: string;
  pays: string;
  statut: string;
  idLogo: string;
  logo?: string;
  logoUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin'; // URL de votre backend

  constructor(private http: HttpClient) {}

  /**
   * Récupère la liste des concessionnaires en attente.
   */
  getConcessionnairesEnAttente(): Observable<ConcessionnaireResponse[]> {
    return this.http.get<ConcessionnaireResponse[]>(`${this.apiUrl}/en-attente`);
  }

  /**
   * Met à jour le statut d'un concessionnaire.
   */
  updateStatut(email: string, newStatut: string): Observable<string> {
    const url = `${this.apiUrl}/statut`;
    const body = { email: email, statut: newStatut };
    return this.http.put(url, body, { responseType: 'text' });
  }

   updateStatutClient(idUtilisateur: number, newStatut: string): Observable<string> {
      const url = `${this.apiUrl}/statut/client`;
      const body = { idUtilisateur: idUtilisateur, statut: newStatut };
      return this.http.put(url, body, { responseType: 'text' });
    }

}
