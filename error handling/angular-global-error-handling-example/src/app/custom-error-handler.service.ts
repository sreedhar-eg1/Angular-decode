import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error: any): void {
    this.snackBar.open(
      'Error was detected! We are already working on it!',
      'Close',
      {
        duration: 2000,
      },
    );

    console.log('Caught by custom error handler', error)
  }
}
