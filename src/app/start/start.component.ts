import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ColorDirectiveDirective } from '../color-directive.directive';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private routes : Router) { }

  GoToRegisterPage() : void {
    this.routes.navigate(['/register']);
  }

}
