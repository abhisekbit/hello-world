import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    // tslint:disable-next-line:prefer-const
    let value: string = this.el.nativeElement.value;
    // tslint:disable-next-line:curly
    if (this.format === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    // tslint:disable-next-line:curly
    else
      this.el.nativeElement.value = value.toUpperCase();
  }


}
