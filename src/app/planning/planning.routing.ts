import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent }    from './planning.component';

const planningRoutes: Routes = [
  {
    path     : '',
    component : PlanningComponent
  },
  {
    path  :'transfer',
    loadChildren: '../app/planning/transfer/transfer.module#TransferModule',
/*    outlet: 'test'*/
  },
  {
    path        : 'management',
    loadChildren: '../app/planning/management/management.module#ManagementModule',
    /*outlet: 'test'*/
  },
  {
    path:'**',
    redirectTo:''
  }
];

export const PlanningRoutes: ModuleWithProviders = RouterModule.forChild(planningRoutes);
