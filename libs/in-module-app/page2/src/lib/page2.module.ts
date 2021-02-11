import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProvidedInModuleLibModule } from '@angular-experiment-provided-in/shared/provided-in-module-lib';
import { Page2Container } from './page2.container';
import { ProvidedInModule2LibModule } from '@angular-experiment-provided-in/shared/provided-in-module2-lib';

export const page2Routes: Route[] = [{ path: '', component: Page2Container }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(page2Routes),
    ProvidedInModuleLibModule,
    ProvidedInModule2LibModule,
  ],
  declarations: [Page2Container],
})
export class Page2Module {}
