import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCaps'
})
export class FirstLetterCapsPipe implements PipeTransform {

  transform(value: string): string | null {
    debugger
    if (!value) {
      return null;
    }
    
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
