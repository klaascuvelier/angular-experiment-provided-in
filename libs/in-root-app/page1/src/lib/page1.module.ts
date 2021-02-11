import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { Page1Container } from './page1.container';

export const page1Routes: Route[] = [{ path: '', component: Page1Container }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(page1Routes)],
  declarations: [Page1Container],
})
export class Page1Module {}
