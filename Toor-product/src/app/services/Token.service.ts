// auth.service.ts
import { JwtService } from './jwt.service';
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
export class TokenService {



  constructor(private http: HttpClient, private jwtService: JwtService) {}
   private tokenKey = 'token';


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

   // Méthode pour déconnecter l'utilisateur
   logout(): void {
       localStorage.removeItem('token');
   }

   getUserRole(): string | null {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1])); // Décoder le payload du token
            return payload.roles; // Retourner le rôle de l'utilisateur
        }
        return null;
    }

  }
