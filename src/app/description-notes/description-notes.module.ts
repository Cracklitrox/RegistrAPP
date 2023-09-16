import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionNotesPageRoutingModule } from './description-notes-routing.module';

import { DescriptionNotesPage } from './description-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionNotesPageRoutingModule
  ],
  declarations: [DescriptionNotesPage]
})
export class DescriptionNotesPageModule {}
