import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { AddVehicleComponent } from "./add-vehicle/add-vehicle.component";
import { EditVehicleComponent } from "./edit-vehicle/edit-vehicle.component";

const routes: Routes = [
    { path: '', component: VehicleListComponent },
    { path: 'vehicle-list', component: VehicleListComponent },
    { path: 'add-vehicle', component: AddVehicleComponent },
    { path: 'edit-vehicle', component: EditVehicleComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehicleRoutingModule { }
