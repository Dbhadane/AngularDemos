import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studfilter'
})
export class StudfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
