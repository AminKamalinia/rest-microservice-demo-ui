import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateConverter'
})
export class DateConverterPipe implements PipeTransform {

  transform(value: any, format: string): string {
    if (value !== null || value !== undefined) {
      return moment.utc(value).local().format(format);
    } else {
      return '';
    }
  }

}
