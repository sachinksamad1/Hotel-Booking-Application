import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filer'
})
export class FilerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
