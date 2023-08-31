import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingPageLoginPage } from './waiting-page-login.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingPageLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingPageLoginPageRoutingModule {}
