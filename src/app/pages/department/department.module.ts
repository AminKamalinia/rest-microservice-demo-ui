import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { SharedModule } from '../shared.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { SaveDepartmentComponent } from './save-department/save-department.component';


@NgModule({
  declarations: [
    DepartmentListComponent,
    SaveDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule
  ]
})
export class DepartmentModule { }
