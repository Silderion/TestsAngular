import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps : ProduitsService) { }

  ngOnInit(): void {
  }

  // Methode d'enregistrement des produits
  Save_prod(product:any) {
    let data = product.value
    this.ps.addNewProduct(data).subscribe( data => {
      console.log('Great Success !')
    })
  }

}
