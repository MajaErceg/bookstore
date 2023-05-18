import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Users {
    username: string;
    password: string;
  }

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public login(model: Users) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/users/login", model, {observe:'response'});
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

}