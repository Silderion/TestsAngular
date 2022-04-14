import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: any;
afficher:boolean = false;
  constructor(private ps : ProduitsService) { }

  ngOnInit(): void {
    this.getProduits();
  }
  getProduits(){
    this.ps.getProduits().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  supprimer(id:any){
    this.ps.deleteProduit(id).subscribe(data => {
      this.getProduits();
      this.afficher = true;
    });
  }

  changeAvailability(product:any){
    this.ps.disponible(product.id, product.available).subscribe(()=>{
      this.getProduits();
    })
  }

}
