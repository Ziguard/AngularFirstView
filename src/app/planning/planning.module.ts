import { NgModule }            from '@angular/core';
import { FormsModule }         from '@angular/forms';
import { CommonModule }        from '@angular/common';
import { CadencesComponent }   from './cadences/cadences.component';
import { ManagementComponent } from './management/management.component';
import { PlanningComponent }   from './planning.component';

import { PlanningRoutes }    from './planning.routing';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Routing
    PlanningRoutes,
  ],
  declarations: [
                 // sub component
                 PlanningComponent,
                 CadencesComponent,
                 ManagementComponent,
                 TransferComponent]
})
export class PlanningModule { }
