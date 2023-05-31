import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practice1Component } from './practice1/practice1.component';

const routes: Routes = [
  {
    path: '',component:Practice1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Practice1RoutingModule { }
