import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Annonce {
  idAnnonce: number;
  concessionnaire: {
    idConcessionnaire: number;
    nomGerant: string;
    logoUrl: string;
  };
  voyage: {
    idVoyage: number;
    titreVoyage: string;
  };
  statutAnnonce: {
    idStatutAnnonce: number;
    statut: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  private apiUrl = 'http://localhost:8080/api/annonces';

  constructor(private http: HttpClient) {}

  getAnnoncesEnAttente(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiUrl}/en-attente`);
  }

  updateAnnonceStatus(idAnnonce: number, status: string): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      return this.http.put(`${this.apiUrl}/${idAnnonce}/status`, { statut: status }, { headers });
    }
}
