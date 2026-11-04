import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { UserStore } from './user-store';

@Component({
  selector: 'app-users-list',
  imports: [MatButton],
  template: `
  @if (users.hasValue()) {
    <ul class="users-list">
      @for (user of users.value().users; track user.id) {
      <li>
        {{ user.firstName }} {{ user.lastName }}
        <button mat-stroked-button (click)="removeUser(user.id)">Unenroll</button>
      </li>
      }
    </ul>
    }
  `,
})
export class UsersList {
  #userStore = inject(UserStore);

  protected readonly users = this.#userStore.users;

  removeUser(userId: number) {
    this.#userStore.remove(userId)
  }
}
