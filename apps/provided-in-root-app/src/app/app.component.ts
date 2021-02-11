import { Component } from '@angular/core';

@Component({
  selector: 'angular-experiment-provided-in-root',
  template: `
    <header>
      Provided In Root App
      <nav>
        <ul>
          <li>
            <a routerLink="page-1" routerLinkActive="active">Page 1</a>
          </li>
          <li>
            <a routerLink="page-2" routerLinkActive="active">Page 2</a>
          </li>
          <li>
            <a routerLink="page-3" routerLinkActive="active">Page 3</a>
          </li>
        </ul>
      </nav>
    </header>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'provided-in-root-app';
}
