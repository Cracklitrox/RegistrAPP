import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualCredentialPageRoutingModule } from './virtual-credential-routing.module';

import { VirtualCredentialPage } from './virtual-credential.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualCredentialPageRoutingModule
  ],
  declarations: [VirtualCredentialPage]
})
export class VirtualCredentialPageModule {}
