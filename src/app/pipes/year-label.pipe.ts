import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearLabel'
})
export class YearLabelPipe implements PipeTransform {
  transform(value: string): string {
    const year = value.slice(0, 4);
    return year;
  }
}
