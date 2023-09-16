import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualCredentialPage } from './virtual-credential.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualCredentialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualCredentialPageRoutingModule {}
