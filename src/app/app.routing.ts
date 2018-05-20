import { ModuleWithProviders, NgModule }           from '@angular/core';
import { CommonModule }                            from '@angular/common';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
