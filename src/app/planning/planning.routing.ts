import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent }  from './management/management.component';
import { TransferComponent }    from './transfer/transfer.component';
import { PlanningComponent }    from './planning.component';

const planningRoutes: Routes = [
  {
    path     : 'planning',
    component : PlanningComponent,
    children:[
      {
        path  :'transfer',
        component: TransferComponent,
        outlet: 'child',
      },
      {
        path: 'management',
        component: ManagementComponent,
        outlet: 'child',
      }
    ]
  }
];

export const PlanningRoutes: ModuleWithProviders = RouterModule.forChild(planningRoutes);
