import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArtisticAccessories, ArtisticAccessoriesService } from 'src/app/products/artistic-accessories/artistic-accessories.service';

@Component({
  selector: 'app-update-accessory',
  templateUrl: './update-accessory.component.html',
  styleUrls: ['./update-accessory.component.css']
})
export class UpdateAccessoryComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
    private accessory_s:ArtisticAccessoriesService
    ) { }

  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value=>{ this.id=value["id"] });
    this.data= this.findArtisticAccessoriesById(this.id);
  }
  public findArtisticAccessoriesById(id: string): any {
    return this.accessory_s.findArtisticAccessoriesById(id).subscribe(value => { this.data = value; });
  }

  onSubmit(form: NgForm){
    var model: ArtisticAccessories = {
      "id": this.id,
      "accessory": form.value.accessory,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.accessory_s.update(model).subscribe(value => { this.message = "Success!" });
  }

}
