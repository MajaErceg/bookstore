import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BooksService, Books } from 'src/app/products/books/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private book_s:BooksService
    ) { }

  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findBooksById(this.id);
  }
  public findBooksById(id: string): any {
    return this.book_s.findBooksById(id).subscribe(value => { this.data = value; });
  }

onSubmit(form: NgForm){
  var model:Books={
    "id": this.id,
      "book": form.value.book,
      "name":form.value.name,
      "type": form.value.type,
      "author": form.value.author,
      "publisher": form.value.publisher,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
  }
  this.book_s.update(model).subscribe(value => { this.message = "Success!" });
}

}
