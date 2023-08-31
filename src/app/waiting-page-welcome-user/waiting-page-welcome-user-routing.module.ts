import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingPageWelcomeUserPage } from './waiting-page-welcome-user.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingPageWelcomeUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingPageWelcomeUserPageRoutingModule {}
