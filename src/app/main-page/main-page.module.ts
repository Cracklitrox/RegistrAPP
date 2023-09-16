import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainPagePageRoutingModule } from './main-page-routing.module';
import { MainPagePage } from './main-page.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MainPagePageRoutingModule
  ],
  declarations: [MainPagePage]
})
export class MainPagePageModule {}
