import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

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
