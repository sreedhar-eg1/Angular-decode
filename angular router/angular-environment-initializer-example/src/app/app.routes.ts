import { Routes } from '@angular/router';
import { CoursesPage } from './courses/courses-page';
import { UsersPage } from './users/users-page';
import { providePolling } from './core/data-polling-provider';

export const routes: Routes = [
  { path: '', component: CoursesPage },
  {
    path: 'users',
    component: UsersPage,
    providers: [
      providePolling(['users', 'enrollments'])
    ]
  },
];