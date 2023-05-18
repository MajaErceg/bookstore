import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GiftsService } from 'src/app/products/gifts/gifts.service';

@Component({
  selector: 'app-my-gifts',
  templateUrl: './my-gifts.component.html',
  styleUrls: ['./my-gifts.component.css']
})
export class MyGiftsComponent implements OnInit {

  data:any;

  constructor(private gift_s: GiftsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"));
  }

  public findAllBySeller_username(sUsername: string) {
    this.gift_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteGift(id: string){
    this.gift_s.delete(id).subscribe();
    
    this._snackBar.open("Gift is deleted!","",{duration: 3000});
  }

  updateGift(id: String): any {
    this.gift_s.updateGift(id);
  }
}
