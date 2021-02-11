import { Component } from '@angular/core';
import { ProvidedInModule2Service } from '@angular-experiment-provided-in/shared/provided-in-module2-lib';
import { ProvidedInModule3Service } from '@angular-experiment-provided-in/shared/provided-in-module3-lib';

@Component({
  selector: 'in-module-app-page-3',
  template: ` Hello from {{ title }} || {{ title2 }} on page 3 `,
})
export class Page3Container {
  readonly title = this.service.getTitle();
  readonly title2 = this.service2.getTitle();
  constructor(
    private service: ProvidedInModule2Service,
    private service2: ProvidedInModule3Service
  ) {}
}
