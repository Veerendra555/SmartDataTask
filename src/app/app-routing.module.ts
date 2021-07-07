import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsListComponent } from '../app/task/patients-list/patients-list.component';
const routes: Routes = [
 {path :"" ,component:PatientsListComponent},
 {path :"patients-list" ,component:PatientsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
