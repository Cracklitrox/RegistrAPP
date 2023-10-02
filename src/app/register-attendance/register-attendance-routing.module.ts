import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAttendancePage } from './register-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAttendancePageRoutingModule {}
