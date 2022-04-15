import { ThisReceiver } from '@angular/compiler';
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

newProduct = {
  title: "",
  description: "",
  image: "",
  price: 0,
  available : false
}

isAuthenticated = this.ps.isAuthenticated
  constructor(private ps : ProduitsService) { }

  ngOnInit(): void {
    this.getProduits();
    this.isAuthenticated;
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

  availabilityFromProducts(product: any) {
    this.ps.availabilityFromService(product).subscribe(() => {
      this.getProduits();
    })
  }

  searchByRange(search:any){
    let test = search.value
    this.ps.searchByRangeService(test).subscribe(data => {
      this.products = data;
    })
  }

  filterMotsClesFromProducts(motsclesForm: any) {
    this.ps.filterMotsClesFromService(motsclesForm).subscribe(data => {
      this.products = data;
    })
  }

  editProduct(updateData:any){
    this.newProduct = updateData
    console.log(this.newProduct)
  }

  updateProduct(product:any){
    product = this.newProduct
    this.ps.updateProductService(product).subscribe(() =>{
    })
  }
}
