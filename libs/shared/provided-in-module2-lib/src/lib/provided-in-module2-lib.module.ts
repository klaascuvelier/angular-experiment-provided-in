import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidedInModule2Service } from './provided-in-module2.service';

@NgModule({
  imports: [CommonModule],
  providers: [ProvidedInModule2Service],
})
export class ProvidedInModule2LibModule {}
