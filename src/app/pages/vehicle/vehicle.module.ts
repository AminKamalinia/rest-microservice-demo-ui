import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    VehicleListComponent,
    AddVehicleComponent,
    EditVehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    SharedModule
  ]
})
export class VehicleModule { }
