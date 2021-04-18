import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Description3Page } from './description3.page';

const routes: Routes = [
  {
    path: '',
    component: Description3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Description3PageRoutingModule {}
