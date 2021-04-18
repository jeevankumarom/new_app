import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Description2Page } from './description2.page';

const routes: Routes = [
  {
    path: '',
    component: Description2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Description2PageRoutingModule {}
