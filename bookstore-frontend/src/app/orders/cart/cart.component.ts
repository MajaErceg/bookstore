import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Orders, OrdersService } from '../orders.service';

export interface products {
  id: number,
  image: string;
  name: string;
  price: string;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  PRODUCT_DATA: products[] = [];

  cartSource = new MatTableDataSource<products>();
  displayedColumns = ["id", "image", "name", "price", "action"];

  cartnumber: number = +localStorage.getItem("cartNumber");

  constructor(private ordersService: OrdersService) { }

  total: number;
  items: any;
  message: any;

  ngOnInit(): void {

    this.makeArray();

    this.cartSource.data = this.PRODUCT_DATA;

    this.items = this.getItems();

    this.total =  this.totalPrice();

  }

  onSubmit(form: NgForm){
    if (localStorage.getItem("logedin") == "true"){
      var model: Orders = {
        "username": localStorage.getItem("username"),
        "payment": form.value.payment,
        "price": this.total,
        "items": this.items
      }
      this.ordersService.insert(model).subscribe(value => { this.message = "Success!" });
      for(let i=0; i < localStorage.length; i++){
        if(localStorage.key(i).includes("product")){
          localStorage.removeItem("product" + i);
        }
      }
      localStorage.setItem("cartNumber", "0")
      window.location.reload();
    }
  }

  deleteFromCart(id: number){

    if (localStorage.getItem("logedin") == "true"){
     
      this.cartnumber = this.cartnumber - 1; 
      localStorage.setItem("cartNumber", ""+this.cartnumber); 
      localStorage.removeItem("product" + id); 

      this.makeArray();

      this.cartSource.data = this.PRODUCT_DATA;

      this.total =  this.totalPrice();
    }
  }

  reloadPage(){
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
    {
      localStorage.removeItem('firstLoad');
    }
  }

  totalPrice(){
    var totalPrice = 0;
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        totalPrice += JSON.parse(localStorage.getItem(localStorage.key(i))).price;
      }
    }
    return Math.round(totalPrice * 100) / 100;
  }

  getItems(){
    var items = [];
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        console.log(localStorage.key(i))
        items.push({id: i, 
                    image: JSON.parse(localStorage.getItem(localStorage.key(i))).image, 
                    name: JSON.parse(localStorage.getItem(localStorage.key(i))).name, 
                    price: JSON.parse(localStorage.getItem(localStorage.key(i))).price})
      }
    }
    return items;
  }

  makeArray(){
    this.PRODUCT_DATA.length = 0;
    for(let i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes("product")){
        console.log(localStorage.key(i))
        this.PRODUCT_DATA.push({id: parseInt(localStorage.key(i).substring(7)), 
                         image: JSON.parse(localStorage.getItem(localStorage.key(i))).image, 
                         name: JSON.parse(localStorage.getItem(localStorage.key(i))).name, 
                         price: JSON.parse(localStorage.getItem(localStorage.key(i))).price})
      }
    }

  }
}
