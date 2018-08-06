import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, MaxLengthValidator} from '@angular/forms';
import {Validators} from '@angular/forms'
import {UserDetails} from '../user-details'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  UserDetails = new UserDetails();
  genders = ['Male', 'Female', 'Others'];
  maritalstatus = ['Single', 'Married']
  title = ['Mr.', 'Mrs.' ,'Miss'];

  RegisterForm = new FormGroup({
      title: new FormControl('Mr.',[
      Validators.required]),

    firstname: new FormControl('',[
     Validators.required,
     Validators.pattern("[a-zA-Z ]+")]),
     
    
    lastname: new FormControl('',[ 
    Validators.required,
    Validators.pattern("[a-zA-Z ]*")
    ]),

    gender: new FormControl('Male',[
     Validators.required
     
    ]),

    contactnum: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern("[0-9]+"), 
    ]),

    maritalstatus: new FormControl('Single',[
      Validators.required
     ]),

    email:new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.maxLength(20),
    ]),

    empid:new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]+"),
      Validators.maxLength(4),
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16})'),
    ]),
          
    confirmpassword:new FormControl('',[
    Validators.required,
    Validators.maxLength(16),
    Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16})'),
  ]),
      
  })


  constructor(private routes : Router) { }

// ngOnInit() {
//     if (window.location.pathname == "/formfill") {
//         this.UserDetails = JSON.parse(localStorage.getItem("key"));
//         console.log(this.UserDetails)
//         this.RegisterForm.patchValue ({
//         firstname : this.UserDetails.firstname,
//         lastname : this.UserDetails.lastname,
//         gender : this.UserDetails.gender,
//         contactnum : this.UserDetails.contactnum,
//         empid : this.UserDetails.empid,
//         password : this.UserDetails.password,
//         confirmpassword : this.UserDetails.confirmpassword
//       })
//   }
// }
myVar = "Both passwords must match";
check : boolean = true;
CheckPassword(){
  if(this.RegisterForm.value.password!=this.RegisterForm.value.confirmpassword)
      {
        this.myVar = "Both passwords does not match";
         this.check=false;
      }
      else{
        console.log("Correct Password")
        this.check=true;
      }
    }
OnSubmit(){
    localStorage.setItem('key',JSON.stringify(this.RegisterForm.value))
     this.routes.navigate(['/thankyou']);
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


}
