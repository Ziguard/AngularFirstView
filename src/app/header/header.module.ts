import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule, MatMenuModule,
  MatToolbarModule
}                            from '@angular/material';
import { RouterModule }      from '@angular/router';
import { HeaderComponent }   from './header.component';

@NgModule({
  imports: [
    CommonModule,
    //MaterialDesign
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    //Routage
    RouterModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule { }
