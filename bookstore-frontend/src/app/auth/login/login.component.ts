import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users, UsersService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any;
  errorMessage: String;

  constructor(private users_s: UsersService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("logedin") == "true"){
      localStorage.clear();
      window.location.reload();
    }
  }

  onSubmit(form: NgForm){
    var model: Users = {
      "username": form.value.username,
      "password": form.value.password
    }

    this.users_s.login(model).subscribe(value => { this.message = value.body; if(this.message == null){
      this.errorMessage = "Failed! Inccorect password or user doesnt exists!";
      }else{
        localStorage.setItem("username", this.message.username.toString());
        localStorage.setItem("token", value.headers.get("authorization"));
        localStorage.setItem("logedin", "true");
        localStorage.setItem("cartNumber", "0");
        this.router.navigate(['/']);
      }
    }).add(() => { this.errorMessage = "Failed! Inccorect password or user doesnt exists!";});
  }
}
