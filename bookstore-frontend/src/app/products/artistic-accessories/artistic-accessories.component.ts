import { Component, OnInit } from '@angular/core';
import { ArtisticAccessoriesService } from './artistic-accessories.service';

@Component({
  selector: 'app-artistic-accessories',
  templateUrl: './artistic-accessories.component.html',
  styleUrls: ['./artistic-accessories.component.css']
})
export class ArtisticAccessoriesComponent implements OnInit {


  constructor(private accessory_s:ArtisticAccessoriesService) { }

  data: any;
  
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): any{
    this.accessory_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }else{
      this.accessory_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneAccessory(id: String): any {
    this.accessory_s.showOneAccessory(id);
  }

}
