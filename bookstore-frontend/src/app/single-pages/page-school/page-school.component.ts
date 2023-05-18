import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolSuppliesService } from 'src/app/products/school-supplies/school-supplies.service';

@Component({
  selector: 'app-page-school',
  templateUrl: './page-school.component.html',
  styleUrls: ['./page-school.component.css']
})
export class PageSchoolComponent implements OnInit {

  id: string = "";
  data: any;

  constructor(
    private route:ActivatedRoute,
     private school_s:SchoolSuppliesService,
      private _snackBar: MatSnackBar, 
      private router: Router
      ) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findSchoolSuppliesById(this.id);
  }

  public findSchoolSuppliesById(id: string): any {
    return this.school_s.findSchoolSuppliesById(id).subscribe(value => { this.data = value; });
  }

  addToCart(data: any){
    if (localStorage.getItem("logedin") == "true"){
      var cartnumber: number = +localStorage.getItem("cartNumber");
      localStorage.setItem("product" + cartnumber++,  JSON.stringify(data));
      localStorage.setItem("cartNumber", ""+cartnumber);

      this._snackBar.open("You are successfuly added to cart!","",{duration: 3000});
    }else{
      this.router.navigate(['/login'])
    }
  }

}
