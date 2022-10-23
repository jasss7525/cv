import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFirstCaps]'
})
export class FirstCapsDirective {

  lastValue: string;

 
}
