import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GiftsService, Gifts } from 'src/app/products/gifts/gifts.service';

@Component({
  selector: 'app-update-gift',
  templateUrl: './update-gift.component.html',
  styleUrls: ['./update-gift.component.css']
})
export class UpdateGiftComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
     private gift_s:GiftsService
     ) { }

  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findGiftsById(this.id);
  }
  public findGiftsById(id: string): any {
    return this.gift_s.findGiftsById(id).subscribe(value => { this.data = value; });
  }

  onSubmit(form: NgForm){
    var model:Gifts ={
      "id": this.id,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.gift_s.update(model).subscribe(value => { this.message = "Success!" });

  }

}
