import { Component } from '@angular/core';
import { ProvidedInModuleService } from '@angular-experiment-provided-in/shared/provided-in-module-lib';

@Component({
  selector: 'in-module-app-page-1',
  template: ` Hello from {{ title }} on page 1 `,
})
export class Page1Container {
  readonly title = this.service.getTitle();
  constructor(private service: ProvidedInModuleService) {}
}
