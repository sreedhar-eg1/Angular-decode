import { Component } from '@angular/core';
import { UsersList } from './users-list';

@Component({
  selector: 'app-users-page',
  imports: [UsersList],
  template: `
    <h1>Users</h1>
    <hr />
    <h3>Enrolled Users</h3>
    <app-users-list />
  `,
})
export class UsersPage {}
