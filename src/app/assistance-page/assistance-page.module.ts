import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistancePagePageRoutingModule } from './assistance-page-routing.module';

import { AssistancePagePage } from './assistance-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistancePagePageRoutingModule
  ],
  declarations: [AssistancePagePage]
})
export class AssistancePagePageModule {}
