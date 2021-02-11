import { Component } from '@angular/core';
import { ProvidedInRoot2Service } from '@angular-experiment-provided-in/shared/provided-in-root2-lib';
import { ProvidedInRoot3Service } from '@angular-experiment-provided-in/shared/provided-in-root3-lib';

@Component({
  selector: 'in-root-app-page-3',
  template: ` Hello from {{ title }} || {{ title2 }} on page 3 `,
})
export class Page3Container {
  readonly title = this.service.getTitle();
  readonly title2 = this.service2.getTitle();
  constructor(
    private service: ProvidedInRoot2Service,
    private service2: ProvidedInRoot3Service
  ) {}
}
