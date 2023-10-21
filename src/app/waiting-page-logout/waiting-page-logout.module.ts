import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingPageLogoutPageRoutingModule } from './waiting-page-logout-routing.module';

import { WaitingPageLogoutPage } from './waiting-page-logout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingPageLogoutPageRoutingModule
  ],
  declarations: [WaitingPageLogoutPage]
})
export class WaitingPageLogoutPageModule {}
