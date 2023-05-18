import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Gifts {
  id?: string;
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
export class GiftsService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/gifts/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/gifts/search/" + search);
  }

  public findGiftsById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/gifts/product/" + id);
  }

  public insert(model: Gifts) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/gifts/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/gifts/mygifts/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/gifts/delete/" + id)
  }

  showOneGift(id: String): any {
    this.router.navigate(['gifts/oneGift/' + id]);
  }

  updateGift(id: String): any {
    this.router.navigate(['gifts/updateGift/' + id]);
  }

  public update(model: Gifts) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/gifts/update", model);
  }
}