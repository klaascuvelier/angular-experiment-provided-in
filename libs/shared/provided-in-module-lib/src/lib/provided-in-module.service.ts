import { Injectable } from '@angular/core';

@Injectable()
export class ProvidedInModuleService {
  getTitle(): string {
    return 'ProvidedInModuleService';
  }
}
