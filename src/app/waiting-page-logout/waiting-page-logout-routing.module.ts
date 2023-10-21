import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingPageLogoutPage } from './waiting-page-logout.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingPageLogoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingPageLogoutPageRoutingModule {}
