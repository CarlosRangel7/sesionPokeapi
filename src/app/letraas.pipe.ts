import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraas'
})
export class LetraasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toLocaleUpperCase ;
  }

}
