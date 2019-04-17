import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatRadioModule,
} from '@angular/material';



@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
  ]
})
export class MaterialModule {}
