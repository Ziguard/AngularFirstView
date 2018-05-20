import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoute }     from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoute,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
