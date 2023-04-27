import * as moment from "moment";
import { VehicleMaker } from "../enums/vehicle-maker.enum";

export interface EditVehicleInput {
    vehicleMaker: VehicleMaker;
    vehicleYear: number;
    vehicleModel: string;
    inspectionDate: moment.Moment;
    inspectorName: string;
    inspectionLocation: string;
    passOrFail: boolean;
    notes: string;
}