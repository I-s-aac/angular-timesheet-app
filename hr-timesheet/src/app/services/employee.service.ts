import { inject, Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  CollectionReference,
  query,
  where,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);
  employees: CollectionReference;

  constructor() {
    this.employees = collection(this.firestore, 'employee-hours');
  }

  saveEmployeeHours(e: Employee): void {
    addDoc(this.employees, e);
  }
  updateEmployeeHours(e: Employee): void {
    const { id, ...employee } = e;
    updateDoc(doc(this.firestore, 'employee-hours', id), employee);
  }

  getEmployeeHoursByDepartment(departmentId: string): Observable<Employee[]> {
    // get a query filtered by department ids
    const q = query(this.employees, where('departmentId', '==', departmentId));

    // return observable that gives the list of employees maybe
    return collectionData(q, { idField: 'id' }).pipe(
      map((data: Employee[]) =>
        data.map((item) => ({
          id: item.id,
          departmentId: item.departmentId,
          name: item.name,
          payRate: item.payRate,
          monday: item.monday,
          day2: item.day2,
          weddaynes: item.weddaynes,
          thursd: item.thursd,
          fries: item.fries,
          saturn: item.saturn,
          sund: item.sund,
        }))
      )
    );
  }

  deleteEmployeeHours(employee: Employee): void {
    deleteDoc(doc(this.firestore, 'employee-hours', employee.id));
  }
}
