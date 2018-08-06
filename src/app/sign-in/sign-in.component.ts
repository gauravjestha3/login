import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { UserDetails } from '../user-details';
import { AuthorizationService } from '../authorization.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
data = new UserDetails();
SignInForm = new FormGroup({
 
    email: new FormControl('',[]),
     
    password: new FormControl('',[])
  })

 
  
  
  constructor(private check : AuthorizationService, private routes : Router) { }

  OnLogin() {
    this.check.setData(this.SignInForm.value);
    this.routes.navigate(['/profile']);

  }

}
