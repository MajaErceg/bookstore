import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Users {
  fullname: string;
  email: string;
  username: string;
  password: string;
  city: string;
  address: string;
  birthday: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public insert(model: Users) : Observable<HttpResponse<any>>{
    console.log(model);
    return this.http.post<any>("http://localhost:8080/users/insert", model);
  }

}