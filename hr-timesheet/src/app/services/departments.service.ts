import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  departments: Department[] = [
    { id: '1', name: 'customer success' },
    { id: '2', name: 'sales' },
    { id: '3', name: 'finance' },
  ];
  constructor() {}
}
