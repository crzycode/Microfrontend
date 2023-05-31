import { Practice1Module } from './practice1/practice1.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '',component: AppComponent},
  {path: 'practice',
loadChildren: () =>import('./practice1/practice1.module').then(m => m.Practice1Module)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
