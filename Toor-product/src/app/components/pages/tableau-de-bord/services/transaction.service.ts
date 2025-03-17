import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080/api'; // Assurez-vous que l'URL correspond à votre backend

  constructor(private http: HttpClient) {}

  /**
   * Créer un voyage.
   * @param voyageData - Les données du voyage à envoyer au backend.
   * @returns Un Observable contenant la réponse du backend.
   */
  createVoyage(voyageData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/voyages`, voyageData).pipe(
      catchError((error) => this.handleError(error, 'createVoyage'))
    );
  }

  /**
   * Gestion des erreurs HTTP.
   * @param error - L'erreur HTTP.
   * @param operation - Nom de l'opération en cours.
   * @returns Un Observable contenant un message d'erreur.
   */
  private handleError(error: HttpErrorResponse, operation = 'operation'): Observable<never> {
    console.error(`${operation} failed:`, error);

    let errorMessage = 'Une erreur s\'est produite.';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur : ${error.error.message}`;
    } else if (error.status) {
      // Erreur côté serveur
      errorMessage = `Code d'erreur : ${error.status}\nMessage : ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
