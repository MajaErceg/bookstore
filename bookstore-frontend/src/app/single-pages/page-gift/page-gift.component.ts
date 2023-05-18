import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GiftsService } from 'src/app/products/gifts/gifts.service';

@Component({
  selector: 'app-page-gift',
  templateUrl: './page-gift.component.html',
  styleUrls: ['./page-gift.component.css']
})
export class PageGiftComponent implements OnInit {
  id: string = "";
  data: any;

  constructor(
    private route:ActivatedRoute, 
    private gift_s:GiftsService,
     private _snackBar: MatSnackBar, 
     private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findGiftsById(this.id);
  }

  public findGiftsById(id: string): any {
    return this.gift_s.findGiftsById(id).subscribe(value => { this.data = value; });
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
