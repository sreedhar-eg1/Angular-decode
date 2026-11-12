import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  handleError(error: any): void {
    this.zone.run(() => {
      this.snackBar.open(
        'Error was detected! We are already working on it!',
        'Close',
        {
          duration: 2000,
        },
      );
  
      console.log('Caught by custom error handler', error)
    })
  }
}
