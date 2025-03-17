import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService, Utilisateur } from 'src/app/components/pages/tableau-de-bord/services/voyage.service';
import { AdminService } from 'src/app/components/pages/tableau-de-bord/services/Admin.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Utilisateur[] = [];
  filteredClients: Utilisateur[] = [];
  selectedStatus: string = 'all';

  constructor(
    private voyageService: VoyageService,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  // Récupérer la liste de tous les clients
  getClients(): void {
    this.voyageService.getAllClients().subscribe(clients => {
      console.log('Données des clients:', clients);
      this.clients = clients;
      this.applyFilter();
    });
  }

  // Appliquer le filtre sur la liste des clients
  applyFilter(): void {
    if (this.selectedStatus === 'all') {
      this.filteredClients = [...this.clients];
    } else {
      this.filteredClients = this.clients.filter(client =>
        client.statut?.statut === this.selectedStatus
      );
    }
  }

  // Voir les détails d'un client
  consulterDetails(idUtilisateur: number): void {
    console.log('Consulter détails pour:', idUtilisateur);
    this.router.navigate(['/tableau-de-bord-admin/client-details', idUtilisateur]);
  }

  // Mettre à jour le statut d'un client
  updateStatut(client: Utilisateur, nouveauStatut: string): void {


    this.adminService.updateStatutClient(client.idUtilisateur,nouveauStatut).subscribe(
      (response) => {
        console.log('Statut mis à jour avec succès', response);
        alert('Statut mis à jour avec succès');
        this.getClients();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du statut', error);
        alert('Erreur lors de la mise à jour du statut');
      }
    );
  }
}
