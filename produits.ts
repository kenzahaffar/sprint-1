import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
  }

  supprimerProduit(prod: Produit) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.produitService.supprimerProduit(prod);
      this.produits = this.produitService.listeProduits();
    }
  }

  updateProduit(prod: Produit) {
    this.produitService.updateProduit(prod);
    this.produits = this.produitService.listeProduits();
  }
}
