import { inject, Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import {
  Firestore,
  collection,
  addDoc,
  CollectionReference,
} from '@angular/fire/firestore';

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
}
