import { inject, NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserPermissionsService } from './utils/user-permissions.service';
import { map } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canMatch: [
      (route: Route, segments: UrlSegment[]) => {
        console.log(route, segments);

        const router = inject(Router)
        const permissionService = inject(UserPermissionsService)

        return permissionService.isAdmin$.pipe(
          map(isAdmin => isAdmin || router.createUrlTree([""]))
        );
      },
    ],
  },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
