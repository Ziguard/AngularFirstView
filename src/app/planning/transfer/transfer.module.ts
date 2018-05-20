import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { CommonModule }      from '@angular/common';

import { TransferComponent } from './transfer.component';
import { TransferRoute }     from './transfer.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //Routing
    TransferRoute,
  ],
  declarations: [TransferComponent]
})
export class TransferModule { }
