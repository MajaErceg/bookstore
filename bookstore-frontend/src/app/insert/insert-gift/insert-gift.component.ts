import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiftsService, Gifts } from 'src/app/products/gifts/gifts.service';
@Component({
  selector: 'app-insert-gift',
  templateUrl: './insert-gift.component.html',
  styleUrls: ['./insert-gift.component.css']
})
export class InsertGiftComponent implements OnInit {

  constructor(private gift_s: GiftsService) { }

  message: String = "";

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model : Gifts = {
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.gift_s.insert(model).subscribe(value => { this.message = "Success!" });
  }

}
