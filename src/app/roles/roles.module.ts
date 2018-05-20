import { NgModule }                                                                         from '@angular/core';
import { CommonModule }                                                                     from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { RolesComponent }                                                                   from './roles.component';
import { RolesRoute }                                                                       from './roles.routing';
import { TestComponent }                                                                    from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    RolesRoute,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  declarations: [RolesComponent,
                 TestComponent]
})
export class RolesModule { }
