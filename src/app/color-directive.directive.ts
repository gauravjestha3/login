import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  constructor(private ref : ElementRef) {
    this.changeColor('White')
   }
   changeColor(color : any) {
     this.ref.nativeElement.style.color = color;
   }
}
