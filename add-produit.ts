import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit: Produit = {};
  message: string = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {}

  addProduit() {
    console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = 'Produit ' + this.newProduit.nomProduit + ' ajouté avec succès !';
    this.newProduit = {};
  }
}
