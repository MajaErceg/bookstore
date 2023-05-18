import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForKids, ForKidsService } from 'src/app/products/for-kids/for-kids.service';

@Component({
  selector: 'app-update-kids',
  templateUrl: './update-kids.component.html',
  styleUrls: ['./update-kids.component.css']
})
export class UpdateKidsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
    private kids_s:ForKidsService
    ) { }
  
  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findForKidsById(this.id);
  }
  public findForKidsById(id: string): any {
    return this.kids_s.findForKidsById(id).subscribe(value => { this.data = value; });
  }

  onSubmit(form:NgForm){
    var model: ForKids={
      "id": this.id,
      "kids": form.value.kids,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.kids_s.update(model).subscribe(value => { this.message = "Success!" });
  }

}
