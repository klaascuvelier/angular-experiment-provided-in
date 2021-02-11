import { Component } from '@angular/core';
import { ProvidedInRootService } from '@angular-experiment-provided-in/shared/provided-in-root-lib';
import { ProvidedInRoot2Service } from '@angular-experiment-provided-in/shared/provided-in-root2-lib';

@Component({
  selector: 'in-root-app-page-2',
  template: ` Hello from {{ title }} && {{ title2 }} on page 2 `,
})
export class Page2Container {
  readonly title = this.service.getTitle();
  readonly title2 = this.service2.getTitle();
  constructor(
    private service: ProvidedInRootService,
    private service2: ProvidedInRoot2Service
  ) {}
}
