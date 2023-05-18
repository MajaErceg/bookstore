import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ForKidsService } from 'src/app/products/for-kids/for-kids.service';

@Component({
  selector: 'app-page-kids',
  templateUrl: './page-kids.component.html',
  styleUrls: ['./page-kids.component.css']
})
export class PageKidsComponent implements OnInit {

  id: string = "";
  data: any;

  constructor(
    private route:ActivatedRoute,
     private kids_s:ForKidsService, 
     private _snackBar: MatSnackBar, 
     private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findForKidsById(this.id);
  }

  public findForKidsById(id: string): any {
    return this.kids_s.findForKidsById(id).subscribe(value => { this.data = value; });
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
