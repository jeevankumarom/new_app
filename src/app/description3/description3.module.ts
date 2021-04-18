import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Description3PageRoutingModule } from './description3-routing.module';

import { Description3Page } from './description3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Description3PageRoutingModule
  ],
  declarations: [Description3Page]
})
export class Description3PageModule {}
