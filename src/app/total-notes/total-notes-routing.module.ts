import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalNotesPage } from './total-notes.page';

const routes: Routes = [
  {
    path: '',
    component: TotalNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalNotesPageRoutingModule {}
