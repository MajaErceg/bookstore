import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from 'src/app/products/books/books.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  data:any;

  constructor(
    private book_s: BooksService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"));
  }

  public findAllBySeller_username(sUsername: string): any {
    this.book_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteBook(id: string){
    this.book_s.delete(id).subscribe();
    
    this._snackBar.open("Book is deleted!","",{duration: 3000});
  }

  updateBook(id: String): any {
    this.book_s.updateBook(id);
  }

}
