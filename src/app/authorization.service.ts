import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate {
data = new UserDetails();
LSdata = new UserDetails();

  constructor(private routes : Router) { }
  setData (details) : void {
    this.data = details;
  }
canActivate () {
  if (JSON.parse(localStorage.getItem("key"))!=null)
  {
  this.LSdata = JSON.parse(localStorage.getItem("key"));
  if(this.data.email==this.LSdata.email && 
    this.data.password==this.LSdata.password ){
    return true;
  }
  else{
    alert('Username or password does not match')
    return false;
  }}
  else {
    alert("It seems you are not registered. Please register first")
    this.routes.navigate(['/register'])
  }
}


}
