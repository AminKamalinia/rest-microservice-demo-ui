import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appIsInvalid]',
  host: {
    '[class.is-invalid]': 'isInvalid === true'
  },
})
export class IsInvalidDirective {
  @Input('appIsInvalid')
  isInvalid = false;

  constructor() { }

}
