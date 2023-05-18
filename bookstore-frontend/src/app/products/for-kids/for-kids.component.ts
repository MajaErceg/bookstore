import { Component, OnInit } from '@angular/core';
import { ForKidsService } from './for-kids.service';

@Component({
  selector: 'app-for-kids',
  templateUrl: './for-kids.component.html',
  styleUrls: ['./for-kids.component.css']
})
export class ForKidsComponent implements OnInit {

  data:any;

  constructor(private kids_s: ForKidsService) { }



  ngOnInit(): void {
    this.findAll();

  }
  public findAll(): any {
    this.kids_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }else{
      this.kids_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneForKids(id: String): any {
    this.kids_s.showOneForKids(id);
  }

}
