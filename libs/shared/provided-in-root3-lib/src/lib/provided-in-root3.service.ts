import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProvidedInRoot3Service {
  getTitle(): string {
    return 'ProvidedInRootService 33';
  }
}
