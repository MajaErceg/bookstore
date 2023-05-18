
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface ArtisticAccessories {
  id?: string;
  accessory: string;
  name: string;
  manufacturer: string;
  price: any;
  description: string;
  image: string;
  seller_username: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisticAccessoriesService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/artisticAccessories/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/artisticAccessories/search/" + search);
  }

  public findArtisticAccessoriesById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/artisticAccessories/product/" + id);
  }

  public insert(model: ArtisticAccessories) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/artisticAccessories/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/artisticAccessories/myaccessories/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/artisticAccessories/delete/" + id)
  }

  showOneAccessory(id: String): any {
    this.router.navigate(['artisticAccessories/oneArtisticAccessory/' + id]);
  }

  updateArtisticAccessory(id: String): any {
    this.router.navigate(['artisticAccessories/updateArtisticAccessory/' + id]);
  }

  public update(model: ArtisticAccessories) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/artisticAccessories/update", model);
  }
}