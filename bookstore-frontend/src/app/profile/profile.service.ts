import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Users {
    username: string;
    city: string;
    address: string;
  }

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  public findByUsername(username: String) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/users/user/" + username);
  }

  public update(model: Users) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/users/update", model);
  }

}