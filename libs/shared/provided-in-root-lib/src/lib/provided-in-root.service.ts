import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProvidedInRootService {
  getTitle(): string {
    return 'ProvidedInRootService';
  }
}
