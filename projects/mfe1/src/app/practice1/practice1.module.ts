import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Practice1RoutingModule } from './practice1-routing.module';
import { Practice1Component } from './practice1/practice1.component';


@NgModule({
  declarations: [
    Practice1Component
  ],
  imports: [
    CommonModule,
    Practice1RoutingModule
  ],exports:[Practice1Component]
})
export class Practice1Module { }
