import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  isAuthenticated = false;

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

  availabilityFromService(product: any) {
    let available = product.available;
    return this.http.patch("http://localhost:3000/products/" + product.id, {available: !available});
  }

  searchByRangeService(search:any){
    let min = search.min;
    let max = search.max;
    return this.http.get("http://localhost:3000/products?price_gte="+min+"&price_lte="+max);
  }

  filterMotsClesFromService(motsClesForm: any) {
    let mots = motsClesForm.value.motscles;
    return this.http.get("http://localhost:3000/products?q=" + mots);
  }

  updateProductService(updateData:any){
    return this.http.patch("http://localhost:3000/products/"+ updateData.id, updateData)
  }
}
