import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService, private _snackBar: MatSnackBar) { }

  data: any;

  ngOnInit(): void {
    this.findAllByUsername(localStorage.getItem("username"));
  }

  deleteOrder(id: string){
    this.ordersService.deleteById(id).subscribe(value => {});

    this._snackBar.open("Your order is deleted!","",{duration: 3000});
  }

  public findAllByUsername(username: String){
    this.ordersService.findAllByUsername(username).subscribe(value => { this.data = value; })
  }

}
