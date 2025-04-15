import { inject, Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  query,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { where } from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);
  employees: CollectionReference;

  constructor() {
    this.employees = collection(this.firestore, 'employee-hours');
  }

  async saveEmployeeHours(e: Employee): Promise<any> {
    await addDoc(this.employees, e);
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
}
