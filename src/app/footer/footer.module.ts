import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { FooterComponent }  from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports     : [
    FooterComponent
  ],
  declarations: [FooterComponent],
  providers   : []
})
export class FooterModule { }
