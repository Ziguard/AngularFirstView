import { ModuleWithProviders }           from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path:'',
    loadChildren: '../app/home/home.module#HomeModule'
   },
  {
    path: 'planning',
    loadChildren: '../app/planning/planning.module#PlanningModule'
  },
  {
    path        : 'roles',
    loadChildren: '../app/roles/roles.module#RolesModule'
  },
  {
    path:'**',
    redirectTo:''
  }
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
