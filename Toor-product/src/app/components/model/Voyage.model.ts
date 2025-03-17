export interface Voyage {
  idVoyage: number;
  circuit: 'prive' | 'groupe';
  description: string;
  duree?: number;
  guide: 'oui' | 'non';
  idTypeVoyage: number;
  langueGuide?: string;
  prix?: number;
  tailleGroupe?: number;
  titreVoyage: string;
   ageMin: number;
   ageMax: number;

  vol: {
    dateDepart: Date;
    dateArrivee?: Date;
    numeroVol: string;
    nomCompagnieAerienne: string;
    paysDepart: string;
    paysArrivee: string;
    classeVolId: number; // Assurez-vous que c'est un number
    escale: 'direct' | 'escale';
    fraisClassesVol?: { [key: number]: number };
    escales_aller?: number[];
  };

  fraisHotel?: { [key: number]: number }; // Frais d'hôtel par type d'hôtel
  fraisTransport?: { [key: number]: number }; // Frais de transport par type de transport
  fraisNourriture?: { [key: number]: number }; // Frais de nourriture par type de nourriture

  itineraires?: {
    destination: string;
    activite: string;
    transportIds: number[];
    hotelType: number;
    hotelName: string;
    nourriture: number[];
    autre_services: string[];
  }[];

}
