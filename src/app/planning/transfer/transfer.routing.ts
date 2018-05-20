import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent }    from './transfer.component';

const transferRoutes: Routes = [
  {
    path     : '',
    component: TransferComponent
  }
];

export const TransferRoute: ModuleWithProviders = RouterModule.forChild(transferRoutes);
