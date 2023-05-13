import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentInput } from 'src/app/models/department/department-input';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-save-department',
  templateUrl: './save-department.component.html',
  styleUrls: ['./save-department.component.scss']
})
export class SaveDepartmentComponent {

  public submitButtonText = 'Add';
  private idForEdit: string | null = null;

  @Input()
  public set id(value: string) {
    this.idForEdit = value;
    if (value !== '' && value !== null) {
      this.departmentService.getDepartment(this.idForEdit).subscribe({
        next: result => {
          this.submitButtonText = 'Edit';
          this.departmentForm.controls.name.setValue(result.name);
        }, error: error => {

        }
      });
    }
  }

  @Output()
  public loadData: EventEmitter<void> = new EventEmitter();

  departmentForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(
    private departmentService: DepartmentService) {
  }

  onSubmit() {

    const departmentInput: DepartmentInput = {
      name: this.departmentForm.controls.name.value!
    };
    if (this.idForEdit !== null && this.idForEdit !== '') {
      this.edit(departmentInput);
    } else {
      this.add(departmentInput);
    }
  }

  private add(departmentInput: DepartmentInput): void {
    this.departmentService.addDepartment(departmentInput).subscribe({
      next: () => {
        this.loadData.emit();
      }
    });
  }

  private edit(departmentInput: DepartmentInput): void {
    this.departmentService.editDepartment(this.idForEdit!, departmentInput).subscribe({
      next: () => {
        this.loadData.emit();
      }
    });
  }
}
