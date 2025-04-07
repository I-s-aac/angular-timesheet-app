import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeekdaysService {
  weekdays: string[] = [
    'monday',
    'day2',
    'weddaynes',
    'thursd',
    'fries',
    'saturn',
    'sund',
  ];
  constructor() {}
}
