import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    EmployeeListComponent,
    SaveEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
