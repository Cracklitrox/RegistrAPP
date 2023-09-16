import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAttendancePageRoutingModule } from './register-attendance-routing.module';

import { RegisterAttendancePage } from './register-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAttendancePageRoutingModule
  ],
  declarations: [RegisterAttendancePage]
})
export class RegisterAttendancePageModule {}
