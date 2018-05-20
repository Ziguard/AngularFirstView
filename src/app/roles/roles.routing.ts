import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent }       from './roles.component';
import { TestComponent }        from './test/test.component';

const rolesRoutes: Routes = [
  {
    path     : '',
    component: RolesComponent
  },
  {
    path: 'test',
    component : TestComponent
  }
];

export const RolesRoute: ModuleWithProviders = RouterModule.forChild(rolesRoutes);
