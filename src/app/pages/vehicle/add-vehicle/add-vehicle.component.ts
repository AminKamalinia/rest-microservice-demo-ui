import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { VehicleMaker } from 'src/app/models/enums/vehicle-maker.enum';
import { AddVehicleInput } from 'src/app/models/vehicles/add-vehicle-input';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent {

  vehicleMakerEnum = VehicleMaker;

  vehicleForm = new FormGroup({
    vin: new FormControl('', [Validators.required]),
    vehicleMaker: new FormControl(null, Validators.required),
    vehicleYear: new FormControl('', Validators.required),
    vehicleModel: new FormControl('', Validators.required),
    inspectionDate: new FormControl(moment.now(), Validators.required),
    inspectorName: new FormControl('', Validators.required),
    inspectionLocation: new FormControl('', Validators.required),
    passOrFail: new FormControl(false),
    notes: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService) {
  }

  onSubmit() {

    const addVehicleInput: AddVehicleInput = {
      vin: this.vehicleForm.controls.vin.value!,
      vehicleMaker: this.vehicleForm.controls.vehicleMaker.value!,
      vehicleYear: +this.vehicleForm.controls.vehicleYear.value!,
      vehicleModel: this.vehicleForm.controls.vehicleModel.value!,
      inspectionDate: moment(this.vehicleForm.controls.inspectionDate.value!, 'YYYY-MM-DD H:mm:ss').utc(false),
      inspectorName: this.vehicleForm.controls.inspectorName.value!,
      inspectionLocation: this.vehicleForm.controls.inspectionLocation.value!,
      passOrFail: this.vehicleForm.controls.passOrFail.value!,
      notes: this.vehicleForm.controls.notes.value!
    };
    this.vehicleService.addVehicle(addVehicleInput).subscribe({
      next: () => {
        this.router.navigate(['../vehicle-list'], { relativeTo: this.activatedRoute });
      }
    });
  }
}
