import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  FirestoreModule,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    TimesheetComponent,
    AnalyticsComponent,
    TopNavbarComponent,
    AnalyticsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule, // deprecated, dunno correct thing to use
    FirestoreModule,
  ],
  providers: [
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'angular-timesheet-app-firestor',
        appId: '1:1039257737849:web:3473010e196ba5dd4692a8',
        storageBucket: 'angular-timesheet-app-firestor.firebasestorage.app',
        apiKey: 'AIzaSyCJ77IaxPegXqbofdf9Uc3F6nZrnfIwc9U',
        authDomain: 'angular-timesheet-app-firestor.firebaseapp.com',
        messagingSenderId: '1039257737849',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
