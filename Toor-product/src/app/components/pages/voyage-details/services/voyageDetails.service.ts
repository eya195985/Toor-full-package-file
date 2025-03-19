import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface TypeVoyage {
  idTypeVoyage: number;
  nomTypeVoyage: string; // Ex: "Vacances"
}

export interface ClasseVol {
  idClasseVoyage: number;
  nomClasse: string; // Ex: "Premiere"
  fraisSupplementaire: number; // Frais supplémentaires pour la classe
}

export interface Vol {
  idVol: number;
  nomCompagnieAerienne: string; // Nom de la compagnie aérienne
  numeroVol: string; // Numéro du vol (ex: "AF123")
  dateDepart: string; // Date de départ (ex: "2025-03-18T13:19:00.000Z")
  dateArrivee: string; // Date d'arrivée
  paysDepart: string; // Pays de départ (ex: "Canada")
  paysArrivee: string; // Pays d'arrivée (ex: "France")
  escale: string; // Type d'escale (ex: "direct")
  escales_aller: string | null; // Escales supplémentaires
  classeVol: ClasseVol; // Classe du vol (ex: "Premiere")
}

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
    description: string;
    circuit: string; // "prive" ou "groupe"
    guide: string; // "oui" ou "non"
    langueGuide: string; // Langue du guide
    duree: number; // Durée en jours
    ageMax: number | null; // Âge maximum
    ageMin: number | null; // Âge minimum
    prix: number; // Prix du voyage
    tailleGroupe: number; // Taille du groupe (0 si circuit privé)
    trancheAge: string; // Tranche d'âge (ex: "55-63")
    typeVoyage: TypeVoyage; // Type de voyage (ex: "Vacances")
    vol: Vol; // Informations sur le vol
    itineraires: Itineraire[] | null; // Liste des itinéraires
  };
  statutAnnonce: {
    idStatutAnnonce: number;
    statut: string;
  };
}


export interface Itineraire {
  id: number;
  activites: string;
  destinationRegionJour: string;
  services: Service[];
}

export interface Service {
  id: number;
  hotel: Hotel;
  description: string;
  supplementaires: Supplementaire[];
  serviceTransports: ServiceTransport[];
  serviceNourritures: ServiceNourriture[];
}

export interface Hotel {
  id: number;
  nomHotel: string;
  adresse: string | null;
  prixAdulte: number | null;
  prixEnfant: number | null;
  capacite: number | null;
  typeHotel: TypeHotel;
}

export interface TypeHotel {
  idTypeHotel: number;
  categorie: string;
  fraisSupplementaire: number;
}

export interface Supplementaire {
  id: {
    serviceSupplementaireId: number;
    serviceId: number;
  };
  serviceSupplementaire: {
    id: number;
    nomService: string;
    description: string;
  };
}

export interface ServiceTransport {
  id: {
    idService: number;
    idTransport: number;
  };
  transport: Transport;
}

export interface Transport {
  idTransport: number;
  compagnie: string;
  typeTransport: TypeTransport;
}

export interface TypeTransport {
  idTypeTransport: number;
  nomType: string;
  fraisTransport: number;
}

export interface ServiceNourriture {
  id: {
    idService: number;
    idNourriture: number;
  };
  nourriture: Nourriture;
}

export interface Nourriture {
  id: number;
  typeNourriture: TypeNourriture;
  options: string;
}

export interface TypeNourriture {
  idTypeNourriture: number;
  nomType: string;
  fraisNourriture: number;
}

@Injectable({
  providedIn: 'root',
})
export class VoyageDetailsService {
  private apiUrl = 'http://localhost:8080/api/annonces';

  constructor(private http: HttpClient) {}

  getAnnoncesEnAttente(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiUrl}/En-attente`);
  }

  getItinerairesByVoyageId(idVoyage: number): Observable<Itineraire[]> {
    return this.http.get<Itineraire[]>(`${this.apiUrl}/${idVoyage}/itineraires`);
  }

  updateAnnonceStatus(idAnnonce: number, status: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.put(`${this.apiUrl}/${idAnnonce}/status`, { statut: status }, { headers });
  }

 getAnnonceById(idAnnonce: number): Observable<Annonce> {
   return this.http.get<Annonce>(`${this.apiUrl}/annonces/${idAnnonce}`);
 }
}
