import { NgModule }                                                          from '@angular/core';
import { FormsModule }                                                       from '@angular/forms';
import { CommonModule }                                                      from '@angular/common';
import { MatButtonModule, MatCardModule, MatDialogModule, MatToolbarModule } from '@angular/material';


import { PlanningComponent } from './planning.component';
import { PlanningRoutes }    from './planning.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Routing
    PlanningRoutes,
    //MatDesign,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
                 // sub component
                 PlanningComponent,
                 ]
})
export class PlanningModule { }
