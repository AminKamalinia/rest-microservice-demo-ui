import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { VehicleMaker } from 'src/app/models/enums/vehicle-maker.enum';
import { VehicleResult } from 'src/app/models/vehicles/vehicle-result';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  //#region fontawesome
  public faTrashAlt = faTrashAlt;
  public faPencilAlt = faPencilAlt;
  //#endregion

  public vehicles = new Array<VehicleResult>();

  vehicleMaker = VehicleMaker;

  constructor(private vehicleService: VehicleService) {

  }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (result) => {
        this.vehicles = result;
      },
      error: () => {
        console.log('error');
      }
    });
  }
}
