import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-home',
  template: `
    @for (task of todos.value(); track task.id) {
      <div>{{task.title}}</div>
    }`,
})
export default class Home {
  todos = httpResource<any>(
    () => `https://jsonplaceholder.typicode.com/todos`
  )
}
