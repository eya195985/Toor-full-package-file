import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode'; // Correct : import par défaut

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor() {}

  // Méthode pour décoder le token JWT
  decodeToken(token: string): any {
    try {
      return jwtDecode(token); // Décoder le token avec jwt-decode
    } catch (error) {
      console.error('Erreur lors du décodage du token', error);
      return null;
    }
  }

  // Méthode pour récupérer le token depuis le localStorage
  getToken(): string | null {
    const token = localStorage.getItem('token'); // Utiliser 'token' comme clé
    console.log('Token récupéré:', token); // Log pour débogage
    return token;
  }

  // Méthode pour récupérer l'ID de l'utilisateur depuis le token
  getUserId(): number | null {
    const token = this.getToken(); // Récupérer le token
    console.log('Token récupéré depuis localStorage:', token);

    if (token) {
      const decodedToken = this.decodeToken(token); // Décoder le token
      console.log('Token décodé:', decodedToken);

      if (!decodedToken) {
        console.error('Impossible de décoder le token');
        return null;
      }

      // Récupérer l'ID de l'utilisateur depuis le token décodé
      return decodedToken?.utilisateurId || null; // Utiliser 'utilisateurId' comme clé
    }
    console.error('Aucun token trouvé');
    return null;
  }

  // Méthode pour récupérer le rôle de l'utilisateur depuis le token
  getUserRole(): string | null {
    const token = this.getToken(); // Récupérer le token
    console.log('Token récupéré depuis localStorage:', token);

    if (token) {
      const decodedToken = this.decodeToken(token); // Décoder le token
      console.log('Token décodé:', decodedToken);

      if (!decodedToken) {
        console.error('Impossible de décoder le token');
        return null;
      }

      // Récupérer le rôle de l'utilisateur depuis le token décodé
      return decodedToken?.roles || null; // Utiliser 'roles' comme clé
    }
    console.error('Aucun token trouvé');
    return null;
  }

  // Méthode pour récupérer l'email de l'utilisateur depuis le token
  getUserEmail(): string | null {
    const token = this.getToken(); // Récupérer le token
    console.log('Token récupéré depuis localStorage:', token);

    if (token) {
      const decodedToken = this.decodeToken(token); // Décoder le token
      console.log('Token décodé:', decodedToken);

      if (!decodedToken) {
        console.error('Impossible de décoder le token');
        return null;
      }

      // Récupérer l'email de l'utilisateur depuis le token décodé
      return decodedToken?.email || null; // Utiliser 'email' comme clé
    }
    console.error('Aucun token trouvé');
    return null;
  }
}
