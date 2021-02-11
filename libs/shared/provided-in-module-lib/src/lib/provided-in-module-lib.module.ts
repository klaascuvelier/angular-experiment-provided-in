import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidedInModuleService } from './provided-in-module.service';

@NgModule({
  imports: [CommonModule],
  providers: [ProvidedInModuleService],
})
export class ProvidedInModuleLibModule {}
