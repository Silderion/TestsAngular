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
  searchByRangeService(search:any){
    let min = search.min;
    let max = search.max;
    return this.http.get("http://localhost:3000/products?price_gte="+min+"&price_lte="+max);
  }

  searchByKeywordService(search:any){
    let keyword = search.keyword;
    return this.http.get("http://localhost:3000/product?q="+keyword);
  }
}
