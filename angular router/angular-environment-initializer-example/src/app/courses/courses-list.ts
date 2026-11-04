import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardActions, MatCardContent, MatCardSmImage, MatCardImage } from '@angular/material/card';

interface Course {
  id: number;
  name: string;
  url: string;
  thumbnail: string;
}

@Component({
  selector: 'app-courses-list',
  imports: [MatButton, MatCard, MatCardHeader, MatCardContent, MatCardActions, MatCardImage],
  template: `
    <section class="course-list">
      @if (data.hasValue()) {
        @for (course of data.value().courses; track course.id) {
          <mat-card>
            <mat-card-header>
              <h2>{{ course.name }}</h2>
            </mat-card-header>
            <mat-card-content>
              <img mat-card-image [src]="course.thumbnail" alt="{{ course.name }}" />
            </mat-card-content>
            <mat-card-actions>
              <a [href]="course.url" target="_blank" mat-stroked-button>Learn More</a>
            </mat-card-actions>
          </mat-card>
        }
      }
    </section>
  `
})
export class CoursesList {
  data = httpResource<{ courses: Course[] }>(
    () => `https://dummyjson.com/c/6bdb-e567-4d44-8a8e`
  )
}
