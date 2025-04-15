import { Component, inject, Input, OnInit } from '@angular/core';
import { WeekdaysService } from '../../services/weekdays.service';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-analytics-table',
  standalone: false,
  templateUrl: './analytics-table.component.html',
  styleUrl: './analytics-table.component.scss',
})
export class AnalyticsTableComponent implements OnInit {
  @Input()
  departmentId: string | undefined;

  private weekdaysService = inject(WeekdaysService);
  private employeeService = inject(EmployeeService);

  weekdays: string[] = this.weekdaysService.weekdays;
  employees: Employee[] = [];

  // employeeData: Employee[] = [
  //   {
  //     departmentId: '1',
  //     fries: 6,
  //     id: '1',
  //     monday: 4,
  //     name: 'a',
  //     payRate: 70,
  //     saturn: 7,
  //     sund: 6,
  //     thursd: 5,
  //     day2: 3,
  //     weddaynes: 4,
  //   },
  //   {
  //     departmentId: '1',
  //     fries: 2,
  //     id: '2',
  //     monday: 4,
  //     name: 'b',
  //     payRate: 63,
  //     saturn: 1,
  //     sund: 2,
  //     thursd: 3,
  //     day2: 3,
  //     weddaynes: 4,
  //   },
  //   {
  //     departmentId: '2',
  //     fries: 9,
  //     id: '3',
  //     monday: 8,
  //     name: 'c',
  //     payRate: 76,
  //     saturn: 7,
  //     sund: 5,
  //     thursd: 4,
  //     day2: 7,
  //     weddaynes: 5,
  //   },
  //   {
  //     departmentId: '3',
  //     fries: 2,
  //     id: '4',
  //     monday: 3,
  //     name: 'd',
  //     payRate: 56,
  //     saturn: 3,
  //     sund: 2,
  //     thursd: 0,
  //     day2: 4,
  //     weddaynes: 5,
  //   },
  // ];
  ngOnInit(): void {
    // this.employees = this.employeeData.filter((employee) => {
    //   return employee.departmentId === this.departmentId;
    // });
    this.employeeService
      .getEmployeeHoursByDepartment(this.departmentId)
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }
  getTotalHours(e: Employee): number {
    return (
      e.monday + e.day2 + e.weddaynes + e.thursd + e.fries + e.saturn + e.sund
    );
  }
}
