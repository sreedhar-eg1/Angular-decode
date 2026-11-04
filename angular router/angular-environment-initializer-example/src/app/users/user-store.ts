import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  #http = inject(HttpClient);
  users = httpResource<{ users: User[] }>(() => ({
    url: `https://dummyjson.com/users?limit=${Math.floor(Math.random() * 6) + 5}`,
  }));

  reload() {
    console.log('Reloading users...');
    this.users.reload();
  }

  remove(userId: number) {
    return this.#http
      .delete<User>(`https://dummyjson.com/users/${userId}`)
      .subscribe(() => this.removedSuccessfully(userId));
  }

  private removedSuccessfully(userId: number) {
    this.users.update((data) => ({
      users: data!.users.filter((user) => user.id !== userId),
    }));
  }
}
