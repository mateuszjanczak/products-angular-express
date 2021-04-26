import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {ElementComponent} from './element/element.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'element/:id',
    component: ElementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
