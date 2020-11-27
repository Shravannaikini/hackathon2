import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHooverEffect]'
})
export class HooverEffectDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
    this.size('25px');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.size(null);
  }

  private highlight(color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }
  private size(size: string){
    this.element.nativeElement.style.fontSize = size;
  }







}
