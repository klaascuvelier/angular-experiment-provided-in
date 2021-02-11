import { Component } from '@angular/core';
import { ProvidedInRootService } from '@angular-experiment-provided-in/shared/provided-in-root-lib';

@Component({
  selector: 'in-root-app-page-1',
  template: ` Hello from {{ title }} on page 1 `,
})
export class Page1Container {
  readonly title = this.service.getTitle();
  constructor(private service: ProvidedInRootService) {}
}
