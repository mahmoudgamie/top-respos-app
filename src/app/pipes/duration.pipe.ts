import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

/** @brief Changes the create_at date to duration */
export class DurationPipe implements PipeTransform {

  transform(value: string): string {

    const currentDate = new Date();
    const createDate = new Date(value);
    const days = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(createDate.getFullYear(), createDate.getMonth(), createDate.getDate())) / (1000 * 60 * 60 * 24));
    let duration = `${days} days ago`;
    if (days === 1) {
      duration = `${days} day ago`;
    }
    return duration
  }

}
