import { Component, inject } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { WeekdaysService } from '../../services/weekdays.service';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  private weekdaysService = inject(WeekdaysService);

  weekdays: string[] = this.weekdaysService.weekdays;
  employees: Employee[] = [];
  employeeData: Employee[] = [
    {
      departmentId: '1',
      fries: 6,
      id: '1',
      monday: 4,
      name: 'a',
      payRate: 70,
      saturn: 7,
      sund: 6,
      thursd: 5,
      day2: 3,
      weddaynes: 4,
    },
    {
      departmentId: '1',
      fries: 2,
      id: '2',
      monday: 4,
      name: 'b',
      payRate: 63,
      saturn: 1,
      sund: 2,
      thursd: 3,
      day2: 3,
      weddaynes: 4,
    },
    {
      departmentId: '2',
      fries: 9,
      id: '3',
      monday: 8,
      name: 'c',
      payRate: 76,
      saturn: 7,
      sund: 5,
      thursd: 4,
      day2: 7,
      weddaynes: 5,
    },
    {
      departmentId: '3',
      fries: 2,
      id: '4',
      monday: 3,
      name: 'd',
      payRate: 56,
      saturn: 3,
      sund: 2,
      thursd: 0,
      day2: 4,
      weddaynes: 5,
    },
  ];
}
