import { Component, OnInit, inject } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent implements OnInit {
  private departmentsService = inject(DepartmentsService);
  private router = inject(Router);

  departments: Department[];

  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', { id: departmentId }]);
  }
}
