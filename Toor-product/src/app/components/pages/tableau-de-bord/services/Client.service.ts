import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ClientResponse {
  idUtilisateur: number;
  nomComplet: string;
  email: string;
  telephone: string;
  adresse: string;
  idLogo: string;
  logo?: string; // Logo en base64
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
   private apiUrl = 'http://localhost:8080/api/clients'; // URL de votre API

    constructor(private http: HttpClient) {}

    uploadLogo(file: File, userId: string): Observable<any> {
      const formData = new FormData();
      formData.append('logo', file);
      formData.append('userId', userId);

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });

      return this.http.post(`${this.apiUrl}/logo`, formData, { headers });
    }

    getLogo(userId: string): Observable<Blob> {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });

      return this.http.get(`${this.apiUrl}/logo`, {
        headers,
        params: { userId }, // Passer l'ID de l'utilisateur comme paramètre de requête
        responseType: 'blob'
      });
    }

  getClientDetails(token: string): Observable<ClientResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ClientResponse>(`${this.apiUrl}/me`, { headers });
  }

   updateClientDetails(token: string, data: any): Observable<HttpResponse<any>> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.put(`${this.apiUrl}/update`, data, {
        headers: headers,
        observe: 'response', // Pour récupérer toute la réponse HTTP, y compris les en-têtes
      });
    }


}

