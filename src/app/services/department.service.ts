import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DepartmentInput } from '../models/department/department-input';
import { HttpClient } from '@angular/common/http';
import { Utility } from '../shared/utility';
import { Observable } from 'rxjs';
import { DepartmentResult } from '../models/department/department-result';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  public addDepartment(departmentInput: DepartmentInput) {
    return this.httpClient.post(environment.apiUrl + 'Department', departmentInput, Utility.options());
  }

  public editDepartment(id: string, departmentInput: DepartmentInput) {
    return this.httpClient.put(environment.apiUrl + 'Department/' + id, departmentInput, Utility.options());
  }

  public deleteDepartment(id: string) {
    return this.httpClient.delete(environment.apiUrl + 'Department/' + id, Utility.options());
  }

  public getDepartments(): Observable<Array<DepartmentResult>> {
    return this.httpClient.get<DepartmentResult[]>(environment.apiUrl + 'Department', Utility.options());
  }

  public getDepartment(id: string): Observable<DepartmentResult> {
    return this.httpClient.get<DepartmentResult>(environment.apiUrl + 'Department/' + id, Utility.options());
  }
}
