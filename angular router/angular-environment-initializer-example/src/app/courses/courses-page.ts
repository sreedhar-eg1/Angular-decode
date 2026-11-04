import { Component } from '@angular/core';
import { CoursesList } from './courses-list';

@Component({
  selector: 'app-courses-page',
  imports: [CoursesList],
  template: `
    <h1>Available Courses</h1>
    <hr />
    
    <app-courses-list />
  `
})
export class CoursesPage {

}
