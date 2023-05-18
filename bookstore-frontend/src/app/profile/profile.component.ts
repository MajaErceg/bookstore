import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService, Users } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  data: any;
  message: any;
  formatedBirthday: string;

  ngOnInit(): void {
    this.findByUsername(localStorage.getItem("username"))
    
  }

  onSubmit(form: NgForm){
    var model: Users = {
      "username": localStorage.getItem("username"),
      "city": form.value.city,
      "address": form.value.address
    }

    this.profileService.update(model).subscribe(value => { this.message = "User successfuly updated";})
    window.location.reload();
  }

  public findByUsername(username: string){
    this.profileService.findByUsername(username).subscribe(value => { this.data = value;
      this.formatedBirthday = this.data.birthday.substring(0,10);
    });
  }

}
