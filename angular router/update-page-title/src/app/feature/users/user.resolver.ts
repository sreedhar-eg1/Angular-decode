import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable, pluck } from 'rxjs';
import { UserLoaderService } from './user-loader.service';

@Injectable({
  providedIn: 'root',
})
export class UserTitleResolver implements Resolve<string> {
  constructor(private useLoaderService: UserLoaderService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<string> {
    return this.useLoaderService.loadUser(route.paramMap.get('id')!).pipe(
      pluck('name'),
      map((name) => `User - ${name}`),
    );
  }
}
