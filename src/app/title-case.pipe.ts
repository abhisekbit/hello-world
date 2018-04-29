import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) { return null; }

    // tslint:disable-next-line:prefer-const
    let prep = [
      'of',
      'the'
    ];
    // tslint:disable-next-line:prefer-const
    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (prep.includes(words[i])) {
        words[i] = words[i].toLowerCase();
      // tslint:disable-next-line:one-line
      } else {
        words[i] = words[i].substring(0, 1).toUpperCase + words[i].substring(1, length);
      }
    }
    return words.join(' ');
  }

}
