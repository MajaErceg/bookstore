import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ForKidsService } from 'src/app/products/for-kids/for-kids.service';

@Component({
  selector: 'app-my-kids',
  templateUrl: './my-kids.component.html',
  styleUrls: ['./my-kids.component.css']
})
export class MyKidsComponent implements OnInit {

  data:any;

  constructor(private kids_s: ForKidsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"))
  }

  public findAllBySeller_username(sUsername: string): any {
    this.kids_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteForKids(id: string){
    this.kids_s.delete(id).subscribe();
    
    this._snackBar.open("Product is deleted!","",{duration: 3000});
  }

  updateForKids(id: String): any {
    this.kids_s.updateForKids(id);
  }


}
