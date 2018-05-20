import { NgModule }                          from '@angular/core';
import { CommonModule }                      from '@angular/common';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { HomeComponent }                     from './home.component';
import { HomeRoute }                         from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoute,
    MatSidenavModule,
    MatButtonModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
