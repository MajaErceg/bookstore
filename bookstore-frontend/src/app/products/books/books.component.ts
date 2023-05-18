import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private book_s: BooksService) { }

  data: any;

  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): any {
    this.book_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }
    else{
      this.book_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneBook(id: String): any {
    this.book_s.showOneBook(id);
  }

}
