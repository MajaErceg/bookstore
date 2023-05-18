import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SchoolSuppliesService } from 'src/app/products/school-supplies/school-supplies.service';

@Component({
  selector: 'app-my-school',
  templateUrl: './my-school.component.html',
  styleUrls: ['./my-school.component.css']
})
export class MySchoolComponent implements OnInit {

  data:any;

  constructor(private school_s:SchoolSuppliesService,
    private _snackBar: MatSnackBar 
    ) { }

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"))
  }

  public findAllBySeller_username(sUsername: string): any {
    this.school_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteSchoolSupplies(id: string){
    this.school_s.delete(id).subscribe();
    
    this._snackBar.open("SchoolSupplies is deleted!","",{duration: 3000});
  }

  updateSchoolSupplies(id: String): any {
    this.school_s.updateSchoolSupplies(id);
  }

}
