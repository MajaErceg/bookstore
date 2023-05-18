import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForKids, ForKidsService } from 'src/app/products/for-kids/for-kids.service';

@Component({
  selector: 'app-insert-kids',
  templateUrl: './insert-kids.component.html',
  styleUrls: ['./insert-kids.component.css']
})
export class InsertKidsComponent implements OnInit {

  constructor(private kids_s: ForKidsService) { }
  message: String = "";

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
  var model: ForKids = {
    "kids": form.value.kids,
    "name": form.value.name,
    "manufacturer": form.value.manufacturer,
    "price": parseFloat(form.value.price),
    "description": form.value.description,
    "image": form.value.image,
    "seller_username": localStorage.getItem("username")
  }
  this.kids_s.insert(model).subscribe(value => { this.message = "Success!" });
  }

}
