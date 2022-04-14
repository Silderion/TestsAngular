import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

  getProduits(){
    return this.http.get("http://localhost:3000/products")
  }

  deleteProduit(id:any){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  addNewProduct(productForm:any) {
    return this.http.post("http://localhost:3000/products", productForm);
  }

  disponible(id:any, available:any){
    if(available){
      return this.http.patch("http://localhost:3000/"+id, {available: false})
    } else {
      return this.http.patch("http://localhost:3000/"+id, {available: true})
    }
  }
}
