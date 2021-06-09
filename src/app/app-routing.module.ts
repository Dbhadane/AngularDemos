import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempformComponent } from './FormDemos/tempform.component';

const routes: Routes = [
  {
    path: 'tempform' , component: TempformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
