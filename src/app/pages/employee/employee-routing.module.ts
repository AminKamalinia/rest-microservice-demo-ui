import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'save-employee', component: SaveEmployeeComponent },
  { path: 'save-vehicle:/id', component: SaveEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
