import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let duration = ''
    let numberOfYears;
    let numberOfMonths;
    let remainderDays;
    const currentDate = new Date();
    const createDate = new Date(value);
    const time = currentDate.getTime() - createDate.getTime();
    const days = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(createDate.getFullYear(), createDate.getMonth(), createDate.getDate())) / (1000 * 60 * 60 * 24));
    duration = `${days} days ago`
    if (days > 30 && days < 360) {
      numberOfMonths = Math.floor(days / 30);
      remainderDays = days - (numberOfMonths * 30);
      duration = `${numberOfMonths} months and ${remainderDays} days ago`;
    }
    if (days > 360) {
      numberOfYears = Math.floor(days / 360);
      remainderDays = days - (numberOfYears * 360);
      duration = `${numberOfYears} years and ${remainderDays} days ago`
      if (remainderDays > 30) {
        numberOfMonths = Math.floor(remainderDays / 30);
        remainderDays = days - (numberOfYears * 360) - (numberOfMonths * 30);
        duration = `${numberOfYears} years, ${numberOfMonths} months and ${remainderDays} days ago`
        if (!remainderDays) {
          duration = `${numberOfYears} years and ${numberOfMonths} months ago`
        }
      }
    }
    return duration;
  }

}
