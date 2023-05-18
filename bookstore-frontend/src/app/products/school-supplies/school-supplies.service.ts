import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface SchoolSupplies {
  id?: string;
  school_supplies: string;
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
export class SchoolSuppliesService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/schoolSupplies/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/schoolSuppliess/search/" + search);
  }

  public findSchoolSuppliesById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/schoolSupplies/product/" + id);
  }

  public insert(model: SchoolSupplies) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/schoolSupplies/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/schoolSupplies/mysupplies/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/schoolSupplies/delete/" + id)
  }

  showOneSchoolSupplies(id: String): any {
    this.router.navigate(['schoolSupplies/oneSchoolSupplies/' + id]);
  }

  updateSchoolSupplies(id: String): any {
    this.router.navigate(['schoolSupplies/updateSchoolSupplies/' + id]);
  }

  public update(model: SchoolSupplies) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/schoolSupplies/update", model);
  }
}