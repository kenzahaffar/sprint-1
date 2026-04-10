import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[];
  produit!: Produit;

  constructor() {
    console.log('Creation du service ProduitService');
    this.produits = [
      { idProduit: 1, nomProduit: 'Rouge a levres', prixProduit: 30.0, dateCreation: new Date('01/14/2011') },
      { idProduit: 2, nomProduit: 'Mascara', prixProduit: 45.0, dateCreation: new Date('12/17/2025') },
      { idProduit: 3, nomProduit: 'Eyeliner', prixProduit: 18.0, dateCreation: new Date('02/20/2025') }
    ];
  }

  listeProduits(): Produit[] {
    return this.produits;
  }

  ajouterProduit(produit: Produit) {
    this.produits.push(produit);
  }

  supprimerProduit(prod: Produit) {
    const index = this.produits.findIndex((p) => p.idProduit === prod.idProduit);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }

  consulterProduit(id: number): Produit {
    this.produit = this.produits.find((p) => p.idProduit == id)!;
    return this.produit;
  }

  updateProduit(prod: Produit) {
    const index = this.produits.findIndex((p) => p.idProduit === prod.idProduit);
    if (index > -1) {
      this.produits.splice(index, 1, prod);
    }
  }
}


