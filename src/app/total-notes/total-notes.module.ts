import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalNotesPageRoutingModule } from './total-notes-routing.module';

import { TotalNotesPage } from './total-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalNotesPageRoutingModule
  ],
  declarations: [TotalNotesPage]
})
export class TotalNotesPageModule {}
