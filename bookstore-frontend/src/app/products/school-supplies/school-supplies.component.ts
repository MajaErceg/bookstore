import { Component, OnInit } from '@angular/core';
import { SchoolSuppliesService } from './school-supplies.service';

@Component({
  selector: 'app-school-supplies',
  templateUrl: './school-supplies.component.html',
  styleUrls: ['./school-supplies.component.css']
})
export class SchoolSuppliesComponent implements OnInit {

  data:any;

  constructor(private school_s: SchoolSuppliesService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.school_s.findAll().subscribe(value=>
      {
        this.data=value;
      });
  }
  search(search: any){

    if (search.value == ""){
      this.findAll();
    }else{
      this.school_s.findAllByName(search.value.trim()).subscribe(value => 
        { 
          this.data = value; 
        });
    }
  }

  public showOneSchoolSupplies(id: String): any {
    this.school_s.showOneSchoolSupplies(id);
  }

}
