import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-microservice-demo-ui';

  public isCheck = true;

  public onToggleClick(isCheck: boolean): void {
    this.isCheck = isCheck;
  }
}
