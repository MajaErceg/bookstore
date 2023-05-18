import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisticAccessoriesService } from 'src/app/products/artistic-accessories/artistic-accessories.service';

@Component({
  selector: 'app-page-accessory',
  templateUrl: './page-accessory.component.html',
  styleUrls: ['./page-accessory.component.css']
})
export class PageAccessoryComponent implements OnInit {

  id: string = "";
  data: any;

  constructor(
    private route:ActivatedRoute, 
    private accessory_s:ArtisticAccessoriesService, 
    private _snackBar: MatSnackBar, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findArtisticAccessoriesById(this.id);
  }

  public findArtisticAccessoriesById(id: string): any {
    return this.accessory_s.findArtisticAccessoriesById(id).subscribe(value => { this.data = value; });
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
