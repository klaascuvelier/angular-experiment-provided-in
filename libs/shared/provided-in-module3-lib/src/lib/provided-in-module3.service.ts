import { Injectable } from '@angular/core';

@Injectable()
export class ProvidedInModule3Service {
  getTitle(): string {
    return 'ProvidedInModuleService 3';
  }
}
