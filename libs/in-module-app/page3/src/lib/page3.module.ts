import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProvidedInModule2LibModule } from '@angular-experiment-provided-in/shared/provided-in-module2-lib';
import { ProvidedInModule3LibModule } from '@angular-experiment-provided-in/shared/provided-in-module3-lib';
import { Page3Container } from './page3.container';

export const page3Routes: Route[] = [{ path: '', component: Page3Container }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(page3Routes),
    ProvidedInModule2LibModule,
    ProvidedInModule3LibModule,
  ],
  declarations: [Page3Container],
})
export class Page3Module {}
