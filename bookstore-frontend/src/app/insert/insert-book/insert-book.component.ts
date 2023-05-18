import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books, BooksService } from 'src/app/products/books/books.service';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {
  message: String = "";
  constructor( private book_s: BooksService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model: Books = {
      "book": form.value.book,
      "name": form.value.name,
      "type": form.value.type,
      "author": form.value.author,
      "publisher": form.value.publisher,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
  this.book_s.insert(model).subscribe(value => { this.message = "Success!" });
  }
}
