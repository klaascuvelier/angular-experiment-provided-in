import { Injectable } from '@angular/core';

@Injectable()
export class ProvidedInModule2Service {
  getTitle(): string {
    return 'ProvidedInModuleService 2';
  }
}
