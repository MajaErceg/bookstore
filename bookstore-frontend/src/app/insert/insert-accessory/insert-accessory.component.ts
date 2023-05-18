import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArtisticAccessories, ArtisticAccessoriesService } from 'src/app/products/artistic-accessories/artistic-accessories.service';

@Component({
  selector: 'app-insert-accessory',
  templateUrl: './insert-accessory.component.html',
  styleUrls: ['./insert-accessory.component.css']
})
export class InsertAccessoryComponent implements OnInit {

  constructor( private accessory_s: ArtisticAccessoriesService) { }
  message: String = "";


  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model: ArtisticAccessories = {
      "accessory": form.value.accessory,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.desc,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.accessory_s.insert(model).subscribe(value => { this.message = "Success!" });
  }

}
