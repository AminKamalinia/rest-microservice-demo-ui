import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHomeAlt, faCarAlt,faCarOn, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  //#region fontawesome
  public faHomeAlt = faHomeAlt;
  public faCarAlt = faCarAlt;
  public faCarOn = faCarOn;
  public faBuildingUser = faBuildingUser;
  //#endregion

  @Input()
  public isToggleCheck = true;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
}
