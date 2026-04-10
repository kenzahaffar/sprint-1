import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit';
import { Produit } from '../model/produit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-produit.html',
  styles: ``,
})
export class UpdateProduit implements OnInit {
  currentProduit: Produit = {};

  constructor(private activatedRoute: ActivatedRoute,
private produitService: ProduitService,
private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    const produit = this.produitService.consulterProduit(id);
    this.currentProduit = { ...produit };
  }

  onDateChange(dateValue: string) {
    this.currentProduit.dateCreation = new Date(dateValue);
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
