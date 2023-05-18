import { Component, OnInit } from '@angular/core';
import { GiftsService } from './gifts.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  constructor(private gift_s: GiftsService) { }

  data: any;
  
  ngOnInit(): void {
    this.findAll();
  }
  public findAll() : any {
    this.gift_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }else{
      this.gift_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneGift(id: String): any {
    this.gift_s.showOneGift(id);
  }

}
