import { DOCUMENT, inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TabVisibilityMonitor {
  #document = inject(DOCUMENT);
  
  constructor() {
    // Service Initialization logic
    this.#document.addEventListener('visibilitychange', () => {
      if (this.#document.visibilityState === 'visible') {
        console.log('Tab is active');
        // do something
        // e.g reload data, start long living global operations
      } else {
        console.log('User left the tab');
        // do something
        // e.g pause long living global operations
      }
    });
  }


}