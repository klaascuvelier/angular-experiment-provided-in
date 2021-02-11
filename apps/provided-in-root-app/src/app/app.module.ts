import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';

const appRoutes: Route[] = [
  {
    path: 'page-1',
    loadChildren: () =>
      import('@angular-experiment-provided-in/in-root-app/page1').then(
        (m) => m.Page1Module
      ),
  },
  {
    path: 'page-2',
    loadChildren: () =>
      import('@angular-experiment-provided-in/in-root-app/page2').then(
        (m) => m.Page2Module
      ),
  },
  {
    path: 'page-3',
    loadChildren: () =>
      import('@angular-experiment-provided-in/in-root-app/page3').then(
        (m) => m.Page3Module
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
