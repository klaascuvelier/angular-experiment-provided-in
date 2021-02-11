import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { Page2Container } from './page2.container';

export const page2Routes: Route[] = [{ path: '', component: Page2Container }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(page2Routes)],
  declarations: [Page2Container],
})
export class Page2Module {}
