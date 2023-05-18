import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArtisticAccessoriesService } from 'src/app/products/artistic-accessories/artistic-accessories.service';

@Component({
  selector: 'app-my-accessories',
  templateUrl: './my-accessories.component.html',
  styleUrls: ['./my-accessories.component.css']
})
export class MyAccessoriesComponent implements OnInit {

  data:any;

  constructor(
    private accessories_s: ArtisticAccessoriesService,
     private _snackBar: MatSnackBar
     ) { }

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"));
  }
  public findAllBySeller_username(sUsername: string): any {
    this.accessories_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteArtisticAccessory(id: string){
    this.accessories_s.delete(id).subscribe();
    
    this._snackBar.open("Artistic accessory is deleted!","",{duration: 3000});
  }

  updateArtisticAccessory(id: String): any {
    this.accessories_s.updateArtisticAccessory(id);
  }

}
