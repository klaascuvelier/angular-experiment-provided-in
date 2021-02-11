import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProvidedInRoot2Service {
  getTitle(): string {
    return 'ProvidedInRootService 2222';
  }
}
