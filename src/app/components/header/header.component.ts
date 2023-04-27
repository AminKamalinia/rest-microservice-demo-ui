import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isCheck = true;

  @Output()
  public toggle = new EventEmitter<boolean>();

  constructor() { }

  public switchToggle(): void {
    this.isCheck = !this.isCheck;
    this.toggle.emit(this.isCheck);
  }
}
