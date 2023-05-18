import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolSuppliesService, SchoolSupplies } from 'src/app/products/school-supplies/school-supplies.service';

@Component({
  selector: 'app-insert-school',
  templateUrl: './insert-school.component.html',
  styleUrls: ['./insert-school.component.css']
})
export class InsertSchoolComponent implements OnInit {

  constructor(private school_s : SchoolSuppliesService) { }

  message: String = "";

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model: SchoolSupplies = {
      "school_supplies": form.value.school_supplies,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.school_s.insert(model).subscribe(value => { this.message = "Success!" });
  }

}
