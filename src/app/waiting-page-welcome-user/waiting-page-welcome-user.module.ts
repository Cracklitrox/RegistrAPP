import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingPageWelcomeUserPageRoutingModule } from './waiting-page-welcome-user-routing.module';

import { WaitingPageWelcomeUserPage } from './waiting-page-welcome-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingPageWelcomeUserPageRoutingModule
  ],
  declarations: [WaitingPageWelcomeUserPage]
})
export class WaitingPageWelcomeUserPageModule {}
