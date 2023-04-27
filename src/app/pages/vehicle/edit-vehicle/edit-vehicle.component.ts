import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { VehicleMaker } from 'src/app/models/enums/vehicle-maker.enum';
import { EditVehicleInput } from 'src/app/models/vehicles/edit-vehicle-input';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {

  private vin = '';

  vehicleMakerEnum = VehicleMaker;

  public vehicleMaker = VehicleMaker.BMW;
  public vehicleYear = 0;
  public vehicleModel = '';
  public inspectionDate: moment.Moment = moment(moment.now()).local().utc(false);
  public inspectorName = '';
  public inspectionLocation = '';
  public passOrFail = false;
  public notes = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.vin = this.activatedRoute.snapshot.params['vin'];
    this.loadData();
  }

  private loadData(): void {
    this.vehicleService.getVehicle(this.vin).subscribe({
      next: result => {
        this.vehicleMaker = result.vehicleMaker,
          this.vehicleYear = result.vehicleYear,
          this.vehicleModel = result.vehicleModel,
          this.inspectionDate = moment(this.inspectionDate, 'YYYY-MM-DD H:mm:ss').utc(false),
          this.inspectorName = result.inspectorName,
          this.inspectionLocation = result.inspectionLocation,
          this.passOrFail = result.passOrFail,
          this.notes = result.notes
      }
    });
  }

  onSubmit() {

    const editVehicleInput: EditVehicleInput = {
      vehicleMaker: this.vehicleMaker,
      vehicleYear: this.vehicleYear,
      vehicleModel: this.vehicleModel,
      inspectionDate: moment(this.inspectionDate, 'YYYY-MM-DD H:mm:ss').utc(false),
      inspectorName: this.inspectorName,
      inspectionLocation: this.inspectionLocation,
      passOrFail: this.passOrFail,
      notes: this.notes
    };
    this.vehicleService.editVehicle(this.vin, editVehicleInput).subscribe({
      next: () => {
        this.router.navigate(['../vehicle-list'], { relativeTo: this.activatedRoute });
      }
    });
  }
}
