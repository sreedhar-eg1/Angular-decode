import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Subscription, tap, timer } from 'rxjs';

@Injectable()
export class DataPolling {
  #snackbar = inject(MatSnackBar);
  #pollingScopes: string[] = [];
  #pollingSubscription?: Subscription;

  setScope(scopes: string[]) {
    // Set the scope for the polling operation
    this.#pollingScopes = Array.from(new Set([ // removes duplications
      ...this.#pollingScopes, 
      ...scopes
    ]));
  }
  start() {
    // Unsubscribe from an existing subscription if any
    this.#pollingSubscription?.unsubscribe();
    
    // Start new polling session
    console.log(`Polling started...`);
    this.#pollingSubscription = timer(0, 5000)
      .pipe(
        tap(() => console.log(`Checking for new data in scope: ${this.#pollingScopes.join(', ')}`)),
        map(() => (Math.random() < 0.1 ? { message: 'New data available' } : null))
      )
      .subscribe((data) => data && this.#showReloadNotification());
  }
  stop() {
    console.log(`Polling stopped...`)
    this.#pollingSubscription?.unsubscribe();
    this.#pollingSubscription = undefined;
  }
  #showReloadNotification() {
    // store sync logic here...
    this.#snackbar.open(
      'New data received. The data store was updated.',
      'OK',
      {
        duration: 3000, // Keep open until user interacts
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
  }
}
