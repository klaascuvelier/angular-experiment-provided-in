import { Component } from '@angular/core';
import { ProvidedInModuleService } from '@angular-experiment-provided-in/shared/provided-in-module-lib';
import { ProvidedInModule2Service } from '@angular-experiment-provided-in/shared/provided-in-module2-lib';

@Component({
  selector: 'in-module-app-page-2',
  template: ` Hello from {{ title }} && {{ title2 }} on page 2 `,
})
export class Page2Container {
  readonly title = this.service.getTitle();
  readonly title2 = this.service2.getTitle();
  constructor(
    private service: ProvidedInModuleService,
    private service2: ProvidedInModule2Service
  ) {}
}
