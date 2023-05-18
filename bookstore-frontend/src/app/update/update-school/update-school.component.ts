import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SchoolSuppliesService, SchoolSupplies } from 'src/app/products/school-supplies/school-supplies.service';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  id!: string;
  data: any;
  message!: string;

  constructor(
    private route:ActivatedRoute, 
    private school_s:SchoolSuppliesService
    ) {}



  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findSchoolSuppliesById(this.id);
  }

  public findSchoolSuppliesById(id: string): any {
    return this.school_s.findSchoolSuppliesById(id).subscribe(value => { this.data = value; });
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
