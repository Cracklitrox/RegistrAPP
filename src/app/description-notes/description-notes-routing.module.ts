import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionNotesPage } from './description-notes.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionNotesPageRoutingModule {}
