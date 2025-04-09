import { inject, Injectable } from '@angular/core';
import { Department } from '../interfaces/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  private http = inject(HttpClient);
  departments: Department[] = [];

  constructor() {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(
      `https://hr-timesheet-test.firebaseio.com/departments.json`
    );
  }
}
