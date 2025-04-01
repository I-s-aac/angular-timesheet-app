import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
