import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent} from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { ThankYouComponent} from './thank-you/thank-you.component'
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthorizationService } from './authorization.service';

const routes : Routes = [
  {
  path: '',
  component: StartComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'thankyou',
    component : ThankYouComponent
  },
  {
    path : 'profile',
    component : ProfileComponent,
    canActivate: [AuthorizationService]
  },
  {
    path : 'start',
    component : StartComponent
  },
  {
    path : 'signin',
    component : SignInComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    RegisterComponent,
    ColorDirectiveDirective,
    SignInComponent,
    ProfileComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
