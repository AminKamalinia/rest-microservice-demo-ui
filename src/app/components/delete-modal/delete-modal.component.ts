import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  @Output()
  public delete: EventEmitter<void> = new EventEmitter<void>();

  onDeleteClicked(): void {
    this.delete.emit();
  }
}
