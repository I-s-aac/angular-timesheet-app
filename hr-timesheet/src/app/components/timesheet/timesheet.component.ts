import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  standalone: false,
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.scss',
})
export class TimesheetComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private departmentsService = inject(DepartmentsService);

  departments: Department[];
  department: Department | undefined;
  employeeNameFC = new FormControl('');

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find((department) => {
      return department.id === this.route.snapshot.params['id'];
    });
  }
}
