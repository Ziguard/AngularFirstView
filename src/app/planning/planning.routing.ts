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
    loadChildren:'../app/planning/transfer.module#TransferModule'
  },
  {
    path        : 'management',
    loadChildren: '../app/planning/management.module#ManagementModule'
  },
  {
    path:'**',
    redirectTo:''
  }
];

export const PlanningRoutes: ModuleWithProviders = RouterModule.forChild(planningRoutes);
