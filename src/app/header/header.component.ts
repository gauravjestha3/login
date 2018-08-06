import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private routes : Router) { }

Register () {
  this.routes.navigate(['/register']);
}

Login () {
  this.routes.navigate(['/signin']);
}

Profile () {
  alert('First login to your account')
  this.routes.navigate(['/signin']);
}

}
