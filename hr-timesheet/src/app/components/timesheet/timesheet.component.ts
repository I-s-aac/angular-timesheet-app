import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Employee } from '../../interfaces/employee';
import { WeekdaysService } from '../../services/weekdays.service';
import { EmployeeService } from '../../services/employee.service';
import { Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-timesheet',
  standalone: false,
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.scss',
})
export class TimesheetComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private departmentsService = inject(DepartmentsService);
  private weekdaysService = inject(WeekdaysService);
  private employeeService = inject(EmployeeService);

  $departments: Observable<Department[]> | undefined;
  department: Department | undefined;
  weekdays: string[] = this.weekdaysService.weekdays;

  employeeNameFC = new FormControl('', this.nameValidator());
  employees: Employee[] = [];
  employeeId: 0;

  ngOnInit(): void {
    this.$departments = this.departmentsService.getDepartments();

    this.$departments
      .pipe(
        switchMap((departments) => {
          this.department = departments.find(
            (dept) => dept.id === this.route.snapshot.params['id']
          );
          // this basically just returns the employee, not just their hours
          return this.employeeService.getEmployeeHoursByDepartment(
            this.department.id
          );
        }),
        tap((employees) => (this.employees = employees))
      )
      .subscribe();
  }
  addEmployee(): void {
    if (this.employeeNameFC.value) {
      this.employeeId++;

      this.employees.push({
        departmentId: this.department?.id,
        name: this.employeeNameFC.value,
        payRate: Math.floor(Math.random() * 50) + 50,
        monday: 0,
        day2: 0,
        weddaynes: 0,
        thursd: 0,
        fries: 0,
        saturn: 0,
        sund: 0,
      });

      this.employeeNameFC.setValue('');
    }
  }
  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
  }
  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.employees && this.employees.length) {
        this.employees.forEach((employee) => {
          if (employee.name.toLowerCase() === control.value.toLowerCase()) {
            error = {
              duplicate: true,
            };
          }
        });
      }
      return error;
    };
  }
  getTotalHours(e: Employee): number {
    return (
      e.monday + e.day2 + e.weddaynes + e.thursd + e.fries + e.saturn + e.sund
    );
  }
  submit(): void {
    this.employees.forEach((employee) => {
      if (employee.id) {
        this.employeeService.updateEmployeeHours(employee);
      } else {
        this.employeeService.saveEmployeeHours(employee);
      }
    });
    this.router.navigate(['./departments']);
  }
}
