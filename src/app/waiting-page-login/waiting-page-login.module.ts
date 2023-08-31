import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingPageLoginPageRoutingModule } from './waiting-page-login-routing.module';

import { WaitingPageLoginPage } from './waiting-page-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingPageLoginPageRoutingModule
  ],
  declarations: [WaitingPageLoginPage]
})
export class WaitingPageLoginPageModule {}
