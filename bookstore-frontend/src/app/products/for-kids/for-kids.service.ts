import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface ForKids {
  id?: string;
  kids: string;
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
export class ForKidsService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/forKids/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/forKids/search/" + search);
  }

  public findForKidsById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/forKids/product/" + id);
  }

  public insert(model: ForKids) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/forKidss/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/forKids/myfor-kids/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/forKids/delete/" + id)
  }

  showOneForKids(id: String): any {
    this.router.navigate(['forKids/oneForKids/' + id]);
  }

  updateForKids(id: String): any {
    this.router.navigate(['forKids/updateForKids/' + id]);
  }

  public update(model: ForKids) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/forKidss/update", model);
  }
}