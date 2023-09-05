import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistancePagePage } from './assistance-page.page';

const routes: Routes = [
  {
    path: '',
    component: AssistancePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistancePagePageRoutingModule {}
