import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Description2PageRoutingModule } from './description2-routing.module';

import { Description2Page } from './description2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Description2PageRoutingModule
  ],
  declarations: [Description2Page]
})
export class Description2PageModule {}
