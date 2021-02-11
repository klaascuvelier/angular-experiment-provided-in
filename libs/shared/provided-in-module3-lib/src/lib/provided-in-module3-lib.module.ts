import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidedInModule3Service } from './provided-in-module3.service';

@NgModule({
  imports: [CommonModule],
  providers: [ProvidedInModule3Service],
})
export class ProvidedInModule3LibModule {}
