import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
}

@Injectable({
  providedIn: 'root',
})
export class AgenceService {
  private apiUrl = 'http://localhost:8080/api/concessionnaires'; // Déclarez apiUrl ici

  constructor(private http: HttpClient) {}



  updateLogo(formData: FormData, token: string | null): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/logo`, formData, { headers });
  }

  getConcessionnaireByUserId(userId: number): Observable<ConcessionnaireResponse> {
    return this.http.get<ConcessionnaireResponse>(`${this.apiUrl}/by-user-id/${userId}`);
  }

  // Nouvelle méthode pour changer le mot de passe
  changePassword(payload: { oldPassword: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, payload);
  }

  getLogo(idLogo: string, token: string | null): Observable<Blob> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.apiUrl}/logo/${idLogo}`, {
        headers,
        responseType: 'blob',
      });
    }

  updateAgencyDetails(token: string, data: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(`${this.apiUrl}/update-agency`, data, { headers, observe: 'response' });
  }

  // Récupérer un concessionnaire par son ID

      getConcessionnaireById(id: number): Observable<ConcessionnaireResponse> {
        return this.http.get<ConcessionnaireResponse>(`${this.apiUrl}/con/${id}`).pipe(
          catchError((error) => {
            console.error('Erreur lors de la récupération du concessionnaire', error);
            throw error;
          })
        );
      }
}
