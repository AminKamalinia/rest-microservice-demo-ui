import { Injectable } from '@angular/core';
import { AddVehicleInput } from '../models/vehicles/add-vehicle-input';
import { Observable } from 'rxjs';
import { EditVehicleInput } from '../models/vehicles/edit-vehicle-input';
import { VehicleResult } from '../models/vehicles/vehicle-result';
import { Utility } from '../shared/utility';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  public addVehicle(addVehicleInput: AddVehicleInput) {
    return this.httpClient.post(environment.apiUrl + 'Vehicle', addVehicleInput, Utility.options());
  }

  public editVehicle(vin: string, editVehicleInput: EditVehicleInput) {
    return this.httpClient.put(environment.apiUrl + 'Vehicle/' + vin, editVehicleInput, Utility.options());
  }

  public deleteVehicle(vin: string) {
    return this.httpClient.delete(environment.apiUrl + 'Vehicle/' + vin, Utility.options());
  }

  public getVehicles(): Observable<Array<VehicleResult>> {
    return this.httpClient.get<VehicleResult[]>(environment.apiUrl + 'Vehicle', Utility.options());
  }

  public getVehicle(vin: string): Observable<VehicleResult> {
    return this.httpClient.get<VehicleResult>(environment.apiUrl + 'Vehicle/' + vin, Utility.options());
  }
}
