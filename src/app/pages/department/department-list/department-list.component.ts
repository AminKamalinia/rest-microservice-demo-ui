import { Component } from '@angular/core';
import { faPencilAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DepartmentResult } from 'src/app/models/department/department-result';
import { DepartmentService } from 'src/app/services/department.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {

  public id = '';
  private myModal: Modal | null = null;
  private saveDepartmentModal: Modal | null = null;

  //#region fontawesome
  public faPlus = faPlus;
  public faTrashAlt = faTrashAlt;
  public faPencilAlt = faPencilAlt;
  //#endregion

  public departments = new Array<DepartmentResult>();

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.loadData();
    this.myModal = new Modal(document.getElementById('deleteModal') as HTMLElement);
    this.saveDepartmentModal = new Modal(document.getElementById('saveDepartmentModal') as HTMLElement);
  }

  public loadData(): void {
    this.departmentService.getDepartments().subscribe({
      next: (result) => {
        this.departments = result;
      },
      error: () => {
        console.log('error');
      }
    });
  }

  openDeleteModal(id: string): void {
    this.id = id;
    this.myModal!.show();
  }

  delete(): void {
    this.departmentService.deleteDepartment(this.id).subscribe({
      next: () => {
        this.myModal!.hide();
        this.loadData();
      },
      error: () => {
        console.log('error');
      }
    });
  }

  openSaveDepartmentModal(id: string): void {
    this.id = id;
    this.saveDepartmentModal!.show();
  }
}