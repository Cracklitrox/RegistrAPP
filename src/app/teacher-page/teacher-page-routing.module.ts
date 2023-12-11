import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPagePage } from './teacher-page.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPagePageRoutingModule {}
