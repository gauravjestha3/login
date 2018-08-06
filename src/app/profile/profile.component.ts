import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
details : object;
  constructor(private routes : Router) { }

  ngOnInit() {
    
    this.details = JSON.parse(localStorage.getItem("key"));
    console.log(this.details);
    var table = document.getElementById("FormData");
  }
  
  EyeFlag : Boolean = false;
  changeID (id) {
    if (this.EyeFlag) {
      document.getElementById(id).setAttribute('type', 'password');
    }
    else {
      document.getElementById(id).setAttribute('type', 'text');
    }
    this.EyeFlag = !this.EyeFlag;
  }

  ResetDetails(){
    localStorage.clear();
    this.routes.navigate( ["/start"]);
  }

}
