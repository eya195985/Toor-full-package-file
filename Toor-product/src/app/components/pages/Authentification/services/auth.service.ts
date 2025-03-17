// auth.service.ts
import { JwtService } from 'src/app/services/jwt.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';  // URL de ton API backend

  constructor(private http: HttpClient, private jwtService: JwtService) {}

   private tokenKey = 'token';

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        // Stocker le token dans localStorage
        if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token stocké dans localStorage:', response.token); // Afficher le token dans la console
        }
      }),
      catchError((error) => {
        console.error('Erreur lors de la connexion:', error);

        // Extraire le message d'erreur du backend
        const backendErrorMessage = error.error?.message || 'Une erreur inconnue est survenue';

        // Renvoyer un objet d'erreur structuré
        return throwError({
          message: backendErrorMessage,
          status: error.status,
        });
      })
    );
  }
      signupClient(userData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/signup/client`, userData)
          .pipe(
            catchError(error => {
              console.error('Erreur lors de l\'inscription:', error);
              if (error.error && error.error.message) {
                console.error('Message du backend:', error.error.message);
              }
              throw error; // Relancer l'erreur pour la gérer dans le composant si nécessaire
            })
          );
      }


    signupConcessionnaire(formData: FormData): Observable<any> {
      return this.http.post(`${this.apiUrl}/signup/concessionnaire`, formData)
        .pipe(
          catchError(error => {
            console.error('Erreur lors de l\'inscription:', error);
            if (error.error && error.error.message) {
              console.error('Message du backend:', error.error.message);
            }
            throw error; // Relancer l'erreur pour la gérer dans le composant
          })
        );
      }
 getUserRole(): string | null {
     const token = localStorage.getItem('token');
     if (token) {
         const payload = JSON.parse(atob(token.split('.')[1])); // Décoder le payload du token
         return payload.roles; // Retourner le rôle de l'utilisateur
     }
     return null;
 }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('token');
  }

  verifyCode(payload: { email: string, code: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-code`, payload)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la vérification du code:', error);
          if (error.error && error.error.message) {
            console.error('Message du backend:', error.error.message);
          }
          throw error; // Relancer l'erreur pour la gérer dans le composant si nécessaire
        })
      );
  }

// Méthode pour récupérer le token depuis le localStorage
  getToken(): string | null {
    return localStorage.getItem('token'); // Récupère le token depuis le localStorage
  }
 // Mettre à jour le token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Supprimer le token (déconnexion)
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
// Méthode pour récupérer l'ID de l'utilisateur
   getUserId(): number | null {
     return this.jwtService.getUserId(); // Utiliser JwtService pour récupérer l'ID utilisateur
   }


   // Demande de code de vérification pour la réinitialisation du mot de passe
     requestVerificationCode(email: string): Observable<any> {
       return this.http.post(`${this.apiUrl}/forgot-password`, { email }).pipe(
         catchError((error) => {
           console.error('Erreur lors de la demande de code de vérification:', error);
           throw error;
         })
       );
     }

     verifyCodePassword(payload: { email: string, code: string }): Observable<any> {
         return this.http.post(`${this.apiUrl}/verify-code-password`, payload).pipe(
             catchError((error) => {
                 console.error('Erreur lors de la vérification du code:', error);
                 throw error;
             })
         );
     }

     updatePassword(payload: { email: string, newPassword: string }): Observable<any> {
         return this.http.post(`${this.apiUrl}/update-password`, payload).pipe(
             catchError((error) => {
                 console.error('Erreur lors de la mise à jour du mot de passe:', error);
                 throw error;
             })
         );
     }

}
