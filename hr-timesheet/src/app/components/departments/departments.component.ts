import { Component, OnInit, inject } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent implements OnInit {
  private departmentsService = inject(DepartmentsService);
  departments: Department[];
  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }
}
