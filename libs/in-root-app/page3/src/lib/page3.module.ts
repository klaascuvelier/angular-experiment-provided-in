import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { Page3Container } from './page3.container';

export const page3Routes: Route[] = [{ path: '', component: Page3Container }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(page3Routes)],
  declarations: [Page3Container],
})
export class Page3Module {}
