import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value): any {
    if (!value) return 0;
    return Object.keys(value).length;
  }

}
