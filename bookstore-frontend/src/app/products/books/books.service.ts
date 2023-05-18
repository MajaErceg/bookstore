import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Books {
    id?: string;
    book: string;
    name: string;
    type: string;
    author: string;
    publisher: string;
    price: any;
    description: string;
    image: string;
    seller_username: string;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class BooksService {
  
    constructor(private http:HttpClient, private router:Router) { }
  
    public findAll() : Observable<HttpResponse<any>> {
      return this.http.get<any>("http://localhost:8080/books/all");
    }
  
    public findAllByName(search: string) : Observable<HttpResponse<any>> {
      return this.http.get<any>("http://localhost:8080/books/search/" + search);
    }
  
    public findBooksById(id: string) : Observable<HttpResponse<any>>{
      return this.http.get<any>("http://localhost:8080/books/product/" + id);
    }
  
    public insert(model: Books) : Observable<HttpResponse<any>>{
      return this.http.post<any>("http://localhost:8080/books/insert", model);
    }
  
    public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
      return this.http.get<any>("http://localhost:8080/books/mybooks/" + sUsername);
    }
  
    public delete(id: string) : Observable<HttpResponse<any>>{
      return this.http.delete<any>("http://localhost:8080/books/delete/" + id)
    }
  
    showOneBook(id: String): any {
      this.router.navigate(['books/oneBook/' + id]);
    }
  
    updateBook(id: String): any {
      this.router.navigate(['books/updateBook/' + id]);
    }
  
    public update(model: Books) : Observable<HttpResponse<any>>{
      return this.http.post<any>("http://localhost:8080/books/update", model);
    }
  }