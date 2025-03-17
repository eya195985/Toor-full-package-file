import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService, Concessionnaire,Utilisateur } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';
import { AdminService, ConcessionnaireResponse } from 'src/app/components/pages/tableau-de-bord/services/Admin.service';


@Component({
  selector: 'app-concessionnaire-list',
  templateUrl: './concessionnaire-list.component.html',
  styleUrls: ['./concessionnaire-list.component.css']
})
export class ConcessionnaireListComponent implements OnInit {
  concessionnaires: Concessionnaire[] = [];
  filteredConcessionnaires: Concessionnaire[] = [];
  selectedStatus: string = 'all';

  constructor(private voyageService: VoyageService,
              private router: Router,
              private adminService: AdminService,) {}

  ngOnInit(): void {
    this.getConcessionnaires();
  }

  // Récupérer la liste de tous les concessionnaires ou filtrer par statut
  getConcessionnaires(): void {
    if (this.selectedStatus === 'all') {
      // Récupérer tous les concessionnaires
      this.voyageService.getAllConcessionnaires().subscribe(concessionnaires => {
        console.log('Données des concessionnaires:', concessionnaires);
        this.concessionnaires = concessionnaires;
        this.filteredConcessionnaires = [...concessionnaires]; // Afficher tous les concessionnaires si "all"
      });
    } else {
      // Filtrer les concessionnaires par statut utilisateur
      this.voyageService.getConcessionnairesByUtilisateurStatut(this.selectedStatus).subscribe(concessionnaires => {
        this.filteredConcessionnaires = concessionnaires;
      });
    }
  }

  // Appliquer le filtre sur la liste des concessionnaires
  applyFilter(): void {
    this.getConcessionnaires(); // Rafraîchir la liste des concessionnaires en fonction du statut sélectionné
  }

  // Voir les détails d'un concessionnaire
  consulterDetails(idConcessionnaire: number): void {
    console.log('Consulter détails pour:', idConcessionnaire);
    this.router.navigate(['/tableau-de-bord-admin/concessionnaire-details', idConcessionnaire]);
  }

  // Changer le statut d'un concessionnaire
  changeStatus(idConcessionnaire: number, newStatus: string): void {
    this.voyageService.updateConcessionnaireStatus(idConcessionnaire, newStatus).subscribe(() => {
      this.getConcessionnaires(); // Rafraîchir la liste après modification du statut
    });
  }


 updateStatut(concessionnaire: Concessionnaire, nouveauStatut: string): void {
   if (!concessionnaire.utilisateur?.email) {
     console.error('Email non défini');
     alert('Email non défini');
     return;
   }

   this.adminService.updateStatut(concessionnaire.utilisateur.email, nouveauStatut).subscribe(
     (response) => {
       console.log('Statut mis à jour avec succès', response);
       alert('Statut mis à jour avec succès');
       this.getConcessionnaires(); // Recharger la liste après la mise à jour
     },
     (error) => {
       console.error('Erreur lors de la mise à jour du statut', error);
       alert('Erreur lors de la mise à jour du statut');
     }
   );
 }


}
